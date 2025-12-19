import { calcColor } from "./utilities";
// import * as defaultSettings from "../shared/defaultSettings";
// this variable is temporarily in two places.
// 1. src/defaultSettings
// 2. src/content/getVariablesFromStorage.js inside the file
const defaultSettings = {
  temperature: 50,
  opacity: 30,
  size: 30,
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

    if (key === "opacity") {
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
      document.documentElement.style.setProperty(
        "--click-intencity",
        Number((1 - value / 100).toFixed(2))
      );
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

    // Live React update
    window.addEventListener("firefly-storage", (e) => {
      const { key, value } = e.detail;
      applySetting(key, value);
    });

    return;
  }

  // =====================
  // BUILD (chrome.storage)
  // =====================
  chrome.storage.sync.get(Object.keys(defaultSettings.darkMode), (data) => {
    for (const key of Object.keys(defaultSettings.darkMode)) {
      const value =
        data[key] !== undefined ? data[key] : defaultSettings.darkMode[key];
      applySetting(key, value);
    }
  });

  // Listen for changes in chrome.storage + immediate changes from firefly-storage (handled with debounce in hook)
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace !== "sync") return;

    for (const [key, change] of Object.entries(changes)) {
      applySetting(key, change.newValue);
    }
  });

  // Key fix: immediate reaction to changes from options/popup even with debounce
  window.addEventListener("firefly-storage", (e) => {
    const { key, value } = e.detail;
    if (key in defaultSettings.darkMode) {
      applySetting(key, value);
    }
  });
};
