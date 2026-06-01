import type { PulsePuckLiteScreen, PulsePuckLiteScreenId, PulsePuckLiteStore } from '../features/pulsepuck-lite/pulsepuck-lite.store';
import type { PulsePuckLiteDifficulty } from '../game/game-runtime';

export interface PulsePuckLiteTestBridge {
  getState(): PulsePuckLiteScreen;
  actions: {
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
  };
}

declare global {
  interface Window {
    app?: PulsePuckLiteTestBridge;
  }
}

export function attachPulsePuckLiteBridge(store: PulsePuckLiteStore) {
  if (typeof window === 'undefined') {
    return;
  }

  window.app = {
    getState: store.getSnapshot,
    actions: {
      navigate: store.navigate,
      start: store.start,
      pause: store.pause,
      resume: store.resume,
      restart: store.restart,
      tick: store.tick,
      setDifficulty: store.setDifficulty,
      setSoundEnabled: store.setSoundEnabled,
      setHapticsEnabled: store.setHapticsEnabled,
      savePreferences: store.savePreferences,
    },
  };
}
