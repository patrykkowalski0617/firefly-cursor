export const resetSettings = (defaultSettings) => {
  const hasChromeStorage =
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;
  if (hasChromeStorage) {
    chrome.storage.sync.clear();
  } else {
    localStorage.clear();
  }

  Object.entries(defaultSettings).forEach(([key, value]) => {
    window.dispatchEvent(
      new CustomEvent("firefly-storage", {
        detail: { key, value: value },
      })
    );
  });
};
