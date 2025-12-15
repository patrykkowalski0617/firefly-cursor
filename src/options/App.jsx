import { useState, useEffect } from "react";

const isChromeExtension =
  typeof chrome !== "undefined" &&
  chrome.storage &&
  chrome.storage.sync;

export default function App() {
  const [color, setColor] = useState("#ff0000");

  useEffect(() => {
    if (isChromeExtension) {
      chrome.storage.sync.get(["color"], (result) => {
        if (result.color) setColor(result.color);
      });
    } else {
      // DEV fallback
      const saved = localStorage.getItem("color");
      if (saved) setColor(saved);
    }
  }, []);

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);

    if (isChromeExtension) {
      chrome.storage.sync.set({ color: newColor });
    } else {
      // DEV fallback
      localStorage.setItem("color", newColor);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Firefly Cursor</h1>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
}
