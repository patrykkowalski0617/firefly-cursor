import { useState, useEffect } from "react";

export default function App() {
  const [color, setColor] = useState("#ff0000");

  useEffect(() => {
    chrome.storage.sync.get(["color"], (result) => {
      if (result.color) setColor(result.color);
    });
  }, []);

  const handleChange = (e) => {
    setColor(e.target.value);
    chrome.storage.sync.set({ color: e.target.value });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Firefly Cursor Settings</h1>
      <input type="color" value={color} onChange={handleChange} />
      <p>Selected color: {color}</p>
    </div>
  );
}
