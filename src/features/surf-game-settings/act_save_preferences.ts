import { pulsePuckLiteStore } from '../pulsepuck-lite/pulsepuck-lite.store';

export function actSavePreferences() {
  pulsePuckLiteStore.savePreferences();
}
