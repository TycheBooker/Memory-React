export const GameConfig = Object.freeze({
  minSuits: 4,
  maxBoardSize: 64
});

export const DifficultyLevels = Object.freeze({
  EASY: { value: 0, name: 'easy', suits: 4, boardSize: 16 },
  MEDIUM: { value: 1, name: 'medium', suits: 6, boardSize: 36 },
  HARD: { value: 2, name: 'hard', suits: 8, boardSize: 64 }
});

export const Suits = Object.freeze({
  FIRE: { value: 0, name: 'fire' },
  WATER: { value: 1, name: 'water' },
  AIR: { value: 2, name: 'air' },
  EARTH: { value: 3, name: 'earth' },
  LIGHTNING: { value: 4, name: 'lightning' },
  WOOD: { value: 5, name: 'wood' },
  METAL: { value: 6, name: 'metal' },
  STONE: { value: 7, name: 'stone' }
});
