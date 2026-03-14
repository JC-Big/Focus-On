export const XP_CONSTANTS = {
  BASE_XP: 10,
  STREAK_MULTIPLIER: 0.1, // 10% extra per streak day
};

export class XPEngine {
  static calculateXP(amountAdded: number, currentStreak: number = 0): number {
    const baseXP = amountAdded * XP_CONSTANTS.BASE_XP;
    const bonusXP = baseXP * (currentStreak * XP_CONSTANTS.STREAK_MULTIPLIER);
    return Math.floor(baseXP + bonusXP);
  }
}
