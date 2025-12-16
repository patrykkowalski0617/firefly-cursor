import { createFireflyCursor } from './createFireflyCursor.js';
import { getVariablesFromStorage } from './getVariablesFromStorage.js';
import { mouseMove } from './mouseMove.js';
import { click } from './click.js';

const runFireflyCursor = () => {
  const fireflyCursor = createFireflyCursor();
  getVariablesFromStorage();
  mouseMove(fireflyCursor);
  click(fireflyCursor);
};

runFireflyCursor();
