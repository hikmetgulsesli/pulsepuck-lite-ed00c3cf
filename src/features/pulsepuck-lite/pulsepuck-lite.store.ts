import {
  advancePulsePuckLiteRuntime,
  createPulsePuckLiteRuntime,
  type PulsePuckLiteDifficulty,
  type PulsePuckLiteRuntime,
} from '../../game/game-runtime';
import {
  defaultPulsePuckLitePreferences,
  pulsePuckLiteRepo,
  type PulsePuckLitePreferences,
  type PulsePuckLiteStorageStatus,
} from './pulsepuck-lite.repo';

export type PulsePuckLiteScreenId = 'gameplay' | 'settings';

export interface PulsePuckLiteScreen {
  activeScreen: PulsePuckLiteScreenId;
  runtime: PulsePuckLiteRuntime;
  preferences: PulsePuckLitePreferences;
  storageStatus: PulsePuckLiteStorageStatus;
  lastError: string | null;
  started: boolean;
  gameOver: boolean;
}

export interface PulsePuckLiteStore {
  subscribe(listener: () => void): () => void;
  getSnapshot(): PulsePuckLiteScreen;
  navigate(screen: PulsePuckLiteScreenId): void;
  start(): void;
  pause(): void;
  resume(): void;
  restart(): void;
  tick(): void;
  setDifficulty(difficulty: PulsePuckLiteDifficulty): void;
  setSoundEnabled(enabled: boolean): void;
  setHapticsEnabled(enabled: boolean): void;
  savePreferences(): void;
}

const loaded = pulsePuckLiteRepo.load();

let state: PulsePuckLiteScreen = {
  activeScreen: 'gameplay',
  runtime: createPulsePuckLiteRuntime({
    difficulty: loaded.preferences.difficulty,
    score: 0,
    paused: true,
  }),
  preferences: loaded.preferences,
  storageStatus: loaded.status,
  lastError: loaded.error,
  started: false,
  gameOver: false,
};

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function setState(nextState: PulsePuckLiteScreen) {
  state = nextState;
  emit();
}

function persistPreferences(preferences: PulsePuckLitePreferences) {
  const result = pulsePuckLiteRepo.save(preferences);
  return {
    preferences: result.preferences,
    storageStatus: result.status,
    lastError: result.error,
  };
}

function withHighScore(runtime: PulsePuckLiteRuntime, preferences: PulsePuckLitePreferences) {
  const highScore = Math.max(preferences.highScore, runtime.score);
  return highScore === preferences.highScore ? preferences : { ...preferences, highScore };
}

export const pulsePuckLiteStore: PulsePuckLiteStore = {
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getSnapshot() {
    return state;
  },

  navigate(activeScreen) {
    setState({ ...state, activeScreen });
  },

  start() {
    setState({
      ...state,
      activeScreen: 'gameplay',
      started: true,
      gameOver: false,
      runtime: createPulsePuckLiteRuntime({
        difficulty: state.preferences.difficulty,
        score: state.runtime.score,
        paused: false,
      }),
    });
  },

  pause() {
    setState({ ...state, runtime: { ...state.runtime, paused: true } });
  },

  resume() {
    setState({
      ...state,
      activeScreen: 'gameplay',
      started: true,
      runtime: { ...state.runtime, paused: false },
    });
  },

  restart() {
    setState({
      ...state,
      activeScreen: 'gameplay',
      started: true,
      gameOver: false,
      runtime: createPulsePuckLiteRuntime({
        difficulty: state.preferences.difficulty,
        score: 0,
        paused: false,
      }),
    });
  },

  tick() {
    const runtime = advancePulsePuckLiteRuntime(state.runtime, state.preferences.difficulty);
    const gameOver = runtime.lives <= 0;
    const preferences = withHighScore(runtime, state.preferences);
    const persistence = preferences === state.preferences ? null : persistPreferences(preferences);

    setState({
      ...state,
      runtime,
      preferences,
      gameOver,
      ...(persistence ?? {}),
    });
  },

  setDifficulty(difficulty) {
    const preferences = { ...state.preferences, difficulty };
    setState({
      ...state,
      preferences,
      runtime: createPulsePuckLiteRuntime({
        difficulty,
        score: state.runtime.score,
        paused: state.runtime.paused,
      }),
    });
  },

  setSoundEnabled(soundEnabled) {
    setState({ ...state, preferences: { ...state.preferences, soundEnabled } });
  },

  setHapticsEnabled(hapticsEnabled) {
    setState({ ...state, preferences: { ...state.preferences, hapticsEnabled } });
  },

  savePreferences() {
    const persistence = persistPreferences(state.preferences);
    setState({ ...state, ...persistence });
  },
};

export function resetPulsePuckLiteStoreForTest(nextPreferences = defaultPulsePuckLitePreferences) {
  state = {
    activeScreen: 'gameplay',
    runtime: createPulsePuckLiteRuntime({
      difficulty: nextPreferences.difficulty,
      score: 0,
      paused: true,
    }),
    preferences: nextPreferences,
    storageStatus: 'ready',
    lastError: null,
    started: false,
    gameOver: false,
  };
  emit();
}
