// this variable is temporarily in two places.
// 1. src/defaultSettings
// 2. src/content/getVariablesFromStorage.js inside the file

export const defaultSettings = {
  crazyMode: {
    temperature: 100,
    opacity: 100,
    size: 70,
    microMotion: 50,
    breathSpeed: 200,
    followDelay: 30,
    clickColorIntensity: 100,
    isDarkMode: true,
  },
  darkMode: {
    temperature: 50,
    opacity: 30,
    size: 30,
    microMotion: 25,
    breathSpeed: 50,
    followDelay: 0,
    clickColorIntensity: 50,
    isDarkMode: true,
  },
  lightMode: {
    temperature: 5,
    opacity: 90,
    size: 30,
    microMotion: 25,
    breathSpeed: 50,
    followDelay: 0,
    clickColorIntensity: 100,
    isDarkMode: false,
  },
};
