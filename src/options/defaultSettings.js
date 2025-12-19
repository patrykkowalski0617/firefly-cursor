// This object is temporarily stored in two places:
// 1. src/content/getVariablesFromStorage.js (must be inside the file, cannot use import)
// 2. src/options/defaultSettings
// It is becuse problems with build and imports between
// non-react part of app (content/) and react part of app (options/)

const defaultSettings = {
  crazyMode: {
    temperature: 100,
    opacity: 100,
    size: 70,
    microMotion: 50,
    breathSpeed: 200,
    followDelay: 30,
    clickColorIntensity: 100,
    defaultSetting: "crazy",
  },
  darkMode: {
    temperature: 50,
    opacity: 30,
    size: 30,
    microMotion: 25,
    breathSpeed: 50,
    followDelay: 0,
    clickColorIntensity: 50,
    defaultSetting: "dark",
  },
  lightMode: {
    temperature: 5,
    opacity: 90,
    size: 30,
    microMotion: 25,
    breathSpeed: 50,
    followDelay: 0,
    clickColorIntensity: 100,
    defaultSetting: "light",
  },
};

export default defaultSettings;
