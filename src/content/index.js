import { createFireflyCursor } from "./createFireflyCursor.js";
import { getVariablesFromStorage } from "./getVariablesFromStorage.js";
import { onMousemove } from "./onMousemove.js";
import { onClick } from "./onClick.js";

const runFireflyCursor = () => {
  const fireflyCursor = createFireflyCursor();
  getVariablesFromStorage();
  onMousemove(fireflyCursor);
  onClick(fireflyCursor);
};

runFireflyCursor();
