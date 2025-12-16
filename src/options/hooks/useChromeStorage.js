import { useEffect, useState } from "react";

const isChrome = chrome?.storage?.sync;

export function useChromeStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (isChrome) {
      chrome.storage.sync.get([key], (res) => {
        if (res[key] !== undefined) setValue(res[key]);
      });
    }
  }, [key]);

  const update = (val) => {
    setValue(val);
    if (isChrome) {
      chrome.storage.sync.set({ [key]: val });
    }
  };

  return [value, update];
}
