import { create } from 'zustand';
import type { Activity, ActivityHistory, TabType, UserProfile } from '../types';
import { XPEngine } from '../engines/XPEngine';
import { LevelEngine } from '../engines/LevelEngine';
import { RewardEngine } from '../engines/RewardEngine';
import { predefinedActivities } from '../constants/predefinedActivities';

interface StoreState {
  isAuthenticated: boolean;
  isDark: boolean;
  activeTab: TabType;
  selectedActivityId: string | null;
  activities: Activity[];
  history: Record<string, ActivityHistory[]>;
  userProfile: UserProfile;

  // Actions
  login: () => void;
  toggleTheme: () => void;
  setActiveTab: (tab: TabType) => void;
  setSelectedActivityId: (id: string | null) => void;
  addActivity: (activity: Omit<Activity, 'id' | 'current' | 'streak'>) => void;
  addProgress: (activityId: string, amount: number, description: string) => void;
}

const initialActivities: Activity[] = predefinedActivities.map((activity, index) => ({
  ...activity,
  id: (index + 1).toString(),
  current: 0,
  streak: 0,
}));

export const useStore = create<StoreState>((set) => ({
  isAuthenticated: false,
  isDark: false,
  activeTab: 'Social',
  selectedActivityId: null,
  activities: initialActivities,
  history: {},
  userProfile: {
    level: 1,
    xp: 0,
    coins: 0,
  },

  login: () => set({ isAuthenticated: true }),
  
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  
  setActiveTab: (activeTab) => set({ activeTab }),
  
  setSelectedActivityId: (selectedActivityId) => set({ selectedActivityId }),
  
  addActivity: (activityData) => set((state) => ({
    activities: [
      ...state.activities,
      {
        ...activityData,
        id: Date.now().toString(),
        current: 0,
        streak: 0,
      }
    ]
  })),

  addProgress: (activityId, amount, description) => set((state) => {
    const activityIndex = state.activities.findIndex(a => a.id === activityId);
    if (activityIndex === -1) return state;

    const activity = state.activities[activityIndex];
    // if activity is already complete, do not add more progress
    if (activity.current >= activity.total) {
       return state;
    }
    
    // allow partial completion
    const addedAmount = Math.min(amount, activity.total - activity.current);
    const newCurrent = activity.current + addedAmount;

    // Update activities
    const newActivities = [...state.activities];
    newActivities[activityIndex] = { ...activity, current: newCurrent };

    // Update history
    const newRecord: ActivityHistory = {
      id: Date.now().toString(),
      description,
      amount: addedAmount,
      date: new Date().toISOString(),
    };
    const newHistory = { ...state.history };
    newHistory[activityId] = [newRecord, ...(newHistory[activityId] || [])];

    // RPG Engines calculations
    // We only provide XP for the valid added amount
    const gainedXP = XPEngine.calculateXP(addedAmount, activity.streak);
    
    let newXP = state.userProfile.xp + gainedXP;
    let newLevel = state.userProfile.level;
    let newCoins = state.userProfile.coins;

    const levelUpCheck = LevelEngine.checkLevelUp(newXP, newLevel);
    
    if (levelUpCheck.hasLeveledUp) {
      newXP = levelUpCheck.remainingXP;
      newLevel = levelUpCheck.newLevel;
      const coinsReward = RewardEngine.calculateLevelUpRewards(levelUpCheck.levelsGained);
      newCoins += coinsReward;
    }

    return {
      activities: newActivities,
      history: newHistory,
      userProfile: {
        level: newLevel,
        xp: newXP,
        coins: newCoins
      }
    };
  }),
}));
