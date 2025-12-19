export const resetSettings = (defaultSettings) => {
  const hasChromeStorage =
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;

  if (hasChromeStorage) {
    // Czyścimy całe chrome storage
    chrome.storage.sync.clear();

    // Zapisujemy domyślne wartości (chrome.storage.sync.set przyjmuje obiekt)
    chrome.storage.sync.set(defaultSettings, () => {
      // Po zapisaniu wysyłamy zdarzenia dla każdego klucza
      Object.entries(defaultSettings).forEach(([key, value]) => {
        window.dispatchEvent(
          new CustomEvent("firefly-storage", {
            detail: { key, value },
          })
        );
      });
    });
  } else {
    // Dla zwykłej przeglądarki – localStorage
    localStorage.clear();

    Object.entries(defaultSettings).forEach(([key, value]) => {
      // Zapisujemy każdy klucz jako JSON (żeby obsługiwać obiekty, liczby itp.)
      localStorage.setItem(key, JSON.stringify(value));

      // Wysyłamy zdarzenie
      window.dispatchEvent(
        new CustomEvent("firefly-storage", {
          detail: { key, value },
        })
      );
    });
  }
};
