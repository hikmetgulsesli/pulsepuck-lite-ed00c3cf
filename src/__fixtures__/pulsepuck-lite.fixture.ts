import { createPulsePuckLiteRuntime } from '../game/game-runtime';
import type { PulsePuckLiteScreen } from '../features/pulsepuck-lite/pulsepuck-lite.store';
import { defaultPulsePuckLitePreferences } from '../features/pulsepuck-lite/pulsepuck-lite.repo';

export const pulsePuckLiteFixture: PulsePuckLiteScreen = {
  activeScreen: 'gameplay',
  runtime: createPulsePuckLiteRuntime({
    difficulty: defaultPulsePuckLitePreferences.difficulty,
    score: 120,
    paused: true,
  }),
  preferences: {
    ...defaultPulsePuckLitePreferences,
    highScore: 240,
  },
  storageStatus: 'ready',
  lastError: null,
  started: false,
  gameOver: false,
};
