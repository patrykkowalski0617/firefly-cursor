import { calcColor } from "./utilities";
// import * as defaultSettings from "../shared/defaultSettings";
const defaultSettings = {
  temperature: 50,
  transparency: 50,
  size: 50,
  microMotion: 25,
  breathSpeed: 50,
  followDelay: 0,
  clickColorIntensity: 50,
  isDarkMode: true,
};

const variableForJS = {
  breathSpeed: "1",
  isDarkMode: true,
};

export const getVariableForJS = (key) => {
  return variableForJS[key];
};

export const setVariableForJS = (key, value) => {
  variableForJS[key] = value;
};

export const getVariablesFromStorage = () => {
  const hasChromeStorage =
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;

  function applySetting(key, value) {
    let val = value;

    if (val === undefined) {
      val = defaultSettings[key];
    }

    if (key === "temperature") {
      const { rgbDarker, rgbLighter } = calcColor(val);

      document.documentElement.style.setProperty(
        "--pulse-from",
        `rgba(${rgbDarker.r}, ${rgbDarker.g}, ${rgbDarker.b}, 1)`
      );

      document.documentElement.style.setProperty(
        "--pulse-to",
        `rgba(${rgbLighter.r}, ${rgbLighter.g}, ${rgbLighter.b}, 0.8)`
      );
    }

    if (key === "transparency") {
      document.documentElement.style.setProperty(
        "--opacity",
        (val / 100).toFixed(2)
      );
    }

    if (key === "size") {
      document.documentElement.style.setProperty(
        "--size-multiplier",
        (val / 50).toFixed(2)
      );
    }

    if (key === "microMotion") {
      document.documentElement.style.setProperty(
        "--drift-multiplier",
        (val / 50).toFixed(2)
      );
    }

    if (key === "breathSpeed") {
      const breathSpeed = (val / 50).toFixed(2);
      document.documentElement.style.setProperty(
        "--breath-multiplier",
        breathSpeed
      );
      setVariableForJS("breathSpeed", breathSpeed);
    }

    if (key === "clickColorIntensity") {
      setVariableForJS("clickColorIntensity", val);
    }

    if (key === "followDelay") {
      document.documentElement.style.setProperty(
        "--follow-delay-multiplier",
        (val / 50).toFixed(2)
      );
    }

    if (key === "isDarkMode") {
      setVariableForJS("isDarkMode", val);
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
      const value = data[key] !== undefined ? data[key] : defaultSettings[key];
      applySetting(key, value);
    }
  });

  // Nasłuchiwanie zmian w chrome.storage + natychmiastowe zmiany z firefly-storage (z debounce w hooku)
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace !== "sync") return;

    for (const [key, change] of Object.entries(changes)) {
      applySetting(key, change.newValue);
    }
  });

  // Kluczowa poprawka: natychmiastowa reakcja na zmiany z options/popup nawet przy debounce
  window.addEventListener("firefly-storage", (e) => {
    const { key, value } = e.detail;
    if (key in defaultSettings) {
      applySetting(key, value);
    }
  });
};
