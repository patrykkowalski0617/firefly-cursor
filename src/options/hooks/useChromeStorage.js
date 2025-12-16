import { useEffect, useState } from 'react';

export function useChromeStorage(key, defaultValue) {
  const hasChromeStorage = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync;

  const isDev = !hasChromeStorage;

  const [value, setValue] = useState(defaultValue);

  // =====================
  // INIT
  // =====================
  useEffect(() => {
    // -------- BUILD (Chrome Extension) --------
    if (hasChromeStorage) {
      chrome.storage.sync.get([key], (res) => {
        if (res[key] !== undefined) {
          setValue(res[key]);
        }
      });
      return;
    }

    // -------- DEV (localhost / no Chrome API) --------
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      setValue(JSON.parse(saved));
    }
  }, [key, hasChromeStorage]);

  // =====================
  // UPDATE
  // =====================
  const update = (val) => {
    setValue(val);

    // -------- BUILD (Chrome Extension) --------
    if (hasChromeStorage) {
      chrome.storage.sync.set({ [key]: val });
      return;
    }

    // -------- DEV (localhost / no Chrome API) --------
    localStorage.setItem(key, JSON.stringify(val));

    // Optional: notify live preview listeners (e.g. content styles)
    window.dispatchEvent(
      new CustomEvent('firefly-storage', {
        detail: { key, value: val },
      })
    );
  };

  return [value, update];
}
