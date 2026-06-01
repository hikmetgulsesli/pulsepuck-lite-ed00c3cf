import { pulsePuckLiteStore } from '../pulsepuck-lite/pulsepuck-lite.store';

export function actRestartGame() {
  pulsePuckLiteStore.restart();
}
