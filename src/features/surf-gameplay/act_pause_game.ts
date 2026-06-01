import { pulsePuckLiteStore } from '../pulsepuck-lite/pulsepuck-lite.store';

export function actPauseGame() {
  pulsePuckLiteStore.pause();
}
