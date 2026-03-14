export const LEVEL_CONSTANTS = {
  BASE_XP_REQUIREMENT: 100,
  GROWTH_FACTOR: 1.5,
};

export class LevelEngine {
  static calculateXPRequiredForLevel(level: number): number {
    return Math.floor(LEVEL_CONSTANTS.BASE_XP_REQUIREMENT * Math.pow(LEVEL_CONSTANTS.GROWTH_FACTOR, level - 1));
  }

  static checkLevelUp(currentXP: number, currentLevel: number): { hasLeveledUp: boolean, newLevel: number, remainingXP: number, levelsGained: number } {
    let requiredXP = this.calculateXPRequiredForLevel(currentLevel);
    let tempLevel = currentLevel;
    let tempXP = currentXP;
    let leveledUp = false;
    let initialLevel = currentLevel;

    while (tempXP >= requiredXP) {
      tempXP -= requiredXP;
      tempLevel += 1;
      leveledUp = true;
      requiredXP = this.calculateXPRequiredForLevel(tempLevel);
    }

    return {
      hasLeveledUp: leveledUp,
      newLevel: tempLevel,
      remainingXP: tempXP,
      levelsGained: tempLevel - initialLevel,
    };
  }
}
