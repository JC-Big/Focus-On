export const REWARD_CONSTANTS = {
  COINS_PER_LEVEL: 50,
};

export class RewardEngine {
  static calculateLevelUpRewards(levelsGained: number): number {
    return levelsGained * REWARD_CONSTANTS.COINS_PER_LEVEL;
  }
}
