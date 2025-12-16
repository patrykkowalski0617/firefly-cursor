import { calcColor } from "./utilities";

export const getVariablesFromStorage = () => {
  const defaultSettings = {
    temperature: 50,
    intensity: 50,
    size: 50,
  };

  const hasChromeStorage =
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;

  function applySetting(key, value) {
    let val = value;

    if (val === undefined) {
      val = defaultSettings[key];
    }

    if (key === "temperature" && val !== undefined) {
      const { rgbDarker, rgbLighter } = calcColor(val);

      document.documentElement.style.setProperty(
        "--pulse-from",
        `rgba(${rgbDarker.r}, ${rgbDarker.g}, ${rgbDarker.b}, 0.6)`
      );

      document.documentElement.style.setProperty(
        "--pulse-to",
        `rgba(${rgbLighter.r}, ${rgbLighter.g}, ${rgbLighter.b}, 0.4)`
      );
    }

    if (key === "intensity" && val !== undefined) {
      document.documentElement.style.setProperty(
        "--opacity",
        (val / 100).toFixed(2)
      );
    }

    if (key === "size" && val !== undefined) {
      document.documentElement.style.setProperty(
        "--size-multiplier",
        (val / 50).toFixed(2)
      );
    }
  }

  // =====================
  // DEV (localStorage)
  // =====================
  if (!hasChromeStorage) {
    for (const key of Object.keys(defaultSettings)) {
      const stored = localStorage.getItem(key);
      const value = stored !== null ? JSON.parse(stored) : defaultSettings[key];

      applySetting(key, value);
    }

    // live Reacta update
    window.addEventListener("firefly-storage", (e) => {
      const { key, value } = e.detail;
      applySetting(key, value);
    });

    return;
  }

  // =====================
  // BUILD (chrome.storage)
  // =====================
  chrome.storage.sync.get(Object.keys(defaultSettings), (data) => {
    for (const key of Object.keys(defaultSettings)) {
      applySetting(key, data[key]);
    }
  });

  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace !== "sync") return;

    for (const [key, change] of Object.entries(changes)) {
      applySetting(key, change.newValue);
    }
  });
};
