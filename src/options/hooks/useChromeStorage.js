import { useEffect, useState, useRef } from "react";

export function useChromeStorage(key, defaultValue) {
  const hasChromeStorage =
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync;

  const isDev = !hasChromeStorage;

  const [value, setValue] = useState(defaultValue);

  // Ref for storing the debounce timeout
  const timeoutRef = useRef(null);

  // =====================
  // LISTEN (Sync across components)
  // =====================
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.detail && e.detail.key === key) {
        setValue(e.detail.value);
      }
    };

    window.addEventListener("firefly-storage", handleStorageChange);
    return () =>
      window.removeEventListener("firefly-storage", handleStorageChange);
  }, [key]);

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
    setValue(val); // immediate UI update

    // Clear previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Immediately notify content script / injected code – works in both dev and build
    window.dispatchEvent(
      new CustomEvent("firefly-storage", {
        detail: { key, value: val },
      })
    );

    // Debounce only for writing to chrome.storage.sync (quota protection)
    timeoutRef.current = setTimeout(() => {
      // -------- BUILD (Chrome Extension) --------
      if (hasChromeStorage) {
        chrome.storage.sync.set({ [key]: val });
        return;
      }

      // -------- DEV (localhost / no Chrome API) --------
      localStorage.setItem(key, JSON.stringify(val));

      // In dev we already dispatched the event above, so no need to repeat it here
    }, 800);
  };

  // =====================
  // RESET
  // =====================
  const reset = () => {
    update(defaultValue);
  };

  // Cleanup: clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [value, update, reset];
}
