import type { PulsePuckLiteDifficulty } from '../../game/game-runtime';

export interface PulsePuckLitePreferences {
  difficulty: PulsePuckLiteDifficulty;
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  highScore: number;
}

export type PulsePuckLiteStorageStatus = 'ready' | 'recovered' | 'unavailable';

export interface PulsePuckLiteStorageResult {
  preferences: PulsePuckLitePreferences;
  status: PulsePuckLiteStorageStatus;
  error: string | null;
}

const storageKey = 'pulsepuck-lite:preferences';

export const defaultPulsePuckLitePreferences: PulsePuckLitePreferences = {
  difficulty: 'normal',
  soundEnabled: true,
  hapticsEnabled: true,
  highScore: 0,
};

function getStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function parsePreferences(value: string | null): PulsePuckLitePreferences {
  if (!value) {
    return defaultPulsePuckLitePreferences;
  }

  const parsed = JSON.parse(value) as Partial<PulsePuckLitePreferences>;
  const difficulty =
    parsed.difficulty === 'easy' || parsed.difficulty === 'normal' || parsed.difficulty === 'hard'
      ? parsed.difficulty
      : defaultPulsePuckLitePreferences.difficulty;

  return {
    difficulty,
    soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : true,
    hapticsEnabled: typeof parsed.hapticsEnabled === 'boolean' ? parsed.hapticsEnabled : true,
    highScore: typeof parsed.highScore === 'number' && parsed.highScore > 0 ? Math.floor(parsed.highScore) : 0,
  };
}

export const pulsePuckLiteRepo = {
  load(): PulsePuckLiteStorageResult {
    const storage = getStorage();

    if (!storage) {
      return {
        preferences: defaultPulsePuckLitePreferences,
        status: 'unavailable',
        error: 'Preferences storage is unavailable.',
      };
    }

    try {
      return {
        preferences: parsePreferences(storage.getItem(storageKey)),
        status: 'ready',
        error: null,
      };
    } catch {
      storage.removeItem(storageKey);
      return {
        preferences: defaultPulsePuckLitePreferences,
        status: 'recovered',
        error: 'Saved preferences were reset after invalid data was found.',
      };
    }
  },

  save(preferences: PulsePuckLitePreferences): PulsePuckLiteStorageResult {
    const storage = getStorage();

    if (!storage) {
      return {
        preferences,
        status: 'unavailable',
        error: 'Preferences storage is unavailable.',
      };
    }

    try {
      storage.setItem(storageKey, JSON.stringify(preferences));
      return { preferences, status: 'ready', error: null };
    } catch {
      return {
        preferences,
        status: 'unavailable',
        error: 'Preferences could not be saved.',
      };
    }
  },
};
