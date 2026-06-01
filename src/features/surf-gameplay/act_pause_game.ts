import { pulsePuckLiteStore } from '../pulsepuck-lite/pulsepuck-lite.store';

export function actPauseGame() {
  const screen = pulsePuckLiteStore.getSnapshot();

  if (!screen.started || screen.gameOver) {
    pulsePuckLiteStore.start();
    return;
  }

  if (screen.runtime.paused) {
    pulsePuckLiteStore.resume();
    return;
  }

  pulsePuckLiteStore.pause();
}
