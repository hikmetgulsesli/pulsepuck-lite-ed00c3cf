import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  GameSettingsPulsepuckLite,
  GameplayPulsepuckLite,
  type GameSettingsPulsepuckLiteActionId,
  type GameplayPulsepuckLiteActionId,
} from './screens';
import {
  pulsePuckLiteStore,
  type PulsePuckLiteScreen,
} from './features/pulsepuck-lite/pulsepuck-lite.store';
import { attachPulsePuckLiteBridge } from './test/bridge';

function usePulsePuckLiteState() {
  return useSyncExternalStore(
    pulsePuckLiteStore.subscribe,
    pulsePuckLiteStore.getSnapshot,
    pulsePuckLiteStore.getSnapshot,
  );
}

function AppScreen({ screen }: { screen: PulsePuckLiteScreen }) {
  const gameplayActions = useMemo<Partial<Record<GameplayPulsepuckLiteActionId, () => void>>>(
    () => ({
      'pause-game-p-1': pulsePuckLiteStore.pause,
      'settings-2': () => pulsePuckLiteStore.navigate('settings'),
      'start-game-3': pulsePuckLiteStore.start,
      'restart-4': pulsePuckLiteStore.restart,
      'resume-5': pulsePuckLiteStore.resume,
    }),
    [],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsPulsepuckLiteActionId, () => void>>>(
    () => ({
      'settings-1': () => pulsePuckLiteStore.navigate('settings'),
      'pause-2': pulsePuckLiteStore.pause,
      'on-3': () => pulsePuckLiteStore.setSoundEnabled(true),
      'off-4': () => pulsePuckLiteStore.setSoundEnabled(false),
      'on-5': () => pulsePuckLiteStore.setHapticsEnabled(true),
      'off-6': () => pulsePuckLiteStore.setHapticsEnabled(false),
      'easy-7': () => pulsePuckLiteStore.setDifficulty('easy'),
      'normal-8': () => pulsePuckLiteStore.setDifficulty('normal'),
      'hard-9': () => pulsePuckLiteStore.setDifficulty('hard'),
      'return-to-gameplay-10': () => pulsePuckLiteStore.navigate('gameplay'),
      'save-preferences-11': pulsePuckLiteStore.savePreferences,
    }),
    [],
  );

  if (screen.activeScreen === 'settings') {
    return <GameSettingsPulsepuckLite actions={settingsActions} />;
  }

  return <GameplayPulsepuckLite actions={gameplayActions} runtime={screen.runtime} />;
}

export default function App() {
  const screen = usePulsePuckLiteState();

  useEffect(() => attachPulsePuckLiteBridge(pulsePuckLiteStore), []);

  useEffect(() => {
    const tickId = window.setInterval(() => {
      pulsePuckLiteStore.tick();
    }, 600);

    return () => window.clearInterval(tickId);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (screen.activeScreen !== 'gameplay') {
        return;
      }

      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
        event.preventDefault();
        pulsePuckLiteStore.movePlayer(-1);
      }

      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
        event.preventDefault();
        pulsePuckLiteStore.movePlayer(1);
      }

      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        if (!screen.started || screen.gameOver) {
          pulsePuckLiteStore.start();
        } else if (screen.runtime.paused) {
          pulsePuckLiteStore.resume();
        } else {
          pulsePuckLiteStore.pause();
        }
      }

      if (event.key.toLowerCase() === 'r') {
        event.preventDefault();
        pulsePuckLiteStore.restart();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [screen.activeScreen, screen.gameOver, screen.runtime.paused, screen.started]);

  return (
    <div data-setfarm-root="pulsepuck-lite" data-testid="setfarm-app-root">
      <AppScreen screen={screen} />
    </div>
  );
}
