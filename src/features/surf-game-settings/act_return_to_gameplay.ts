import { pulsePuckLiteStore } from '../pulsepuck-lite/pulsepuck-lite.store';

export function actReturnToGameplay() {
  pulsePuckLiteStore.navigate('gameplay');
}
