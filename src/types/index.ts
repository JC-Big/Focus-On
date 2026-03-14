export type TabType = 'Social' | 'Prêmios' | 'Diário';

export interface ActivityHistory {
  id: string;
  description: string;
  amount: number;
  date: string; // ISO string
}

export interface Activity {
  id: string;
  title: string;
  current: number;
  total: number;
  unit: string;
  streak: number;
  color: string; // Tailwind gradient classes or hex
  icon: string; // Icon name from lucide-react
}

export interface UserProfile {
  level: number;
  xp: number;
  coins: number;
}

export interface AppState {
  isAuthenticated: boolean;
  isDark: boolean;
  activeTab: TabType;
  selectedActivityId: string | null;
  activities: Activity[];
  history: Record<string, ActivityHistory[]>;
  userProfile: UserProfile;
}
