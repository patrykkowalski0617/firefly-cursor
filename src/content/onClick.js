import { getVariableForJS } from "./getVariablesFromStorage.js";

export const onClick = (fireflyCursor) => {
  let timeoutId = null;
  let clickVibrantColor = false;

  const getPastelToVividColor = (val, a) => {
    const value = Math.max(0, Math.min(100, val));

    let hue = Math.floor(Math.random() * 360);

    const saturation = Math.round(60 + (value / 100) * 40);

    const lightness = Math.round(85 - (value / 100) * 35);

    return `${hue}, ${saturation}%, ${lightness}%`;
  };

  const onClick = (e, cursor) => {
    if (e.target.classList.contains("content__disable-click")) return;

    const breathSpeed = getVariableForJS("breathSpeed");
    const clickColorIntensity = getVariableForJS("clickColorIntensity");

    const clickFactor = 0.3;
    const baseDuration = 3000; // ms

    const finalClickDurationMs = Math.round(
      baseDuration / (breathSpeed * clickFactor + 1)
    );

    document.documentElement.style.setProperty(
      "--breath-click-duration",
      `${finalClickDurationMs}ms`
    );

    document.documentElement.style.setProperty(
      "--breath-multiplier",
      breathSpeed
    );

    const pastelToVividColor = getPastelToVividColor(clickColorIntensity);
    cursor.style.setProperty("--random-pastelToVividColor", pastelToVividColor);

    cursor.classList.remove("click");
    clearTimeout(timeoutId);
    void cursor.offsetWidth;
    cursor.classList.add("click");
    timeoutId = setTimeout(
      () => cursor.classList.remove("click"),
      finalClickDurationMs
    );
  };

  window.addEventListener("click", (e) => onClick(e, fireflyCursor));

  const applyVibrantSetting = (enabled) => {
    clickVibrantColor = !!enabled;
  };

  chrome?.storage?.sync.get(["clickVibrantColor"], (result) => {
    applyVibrantSetting(result.clickVibrantColor);
  });

  chrome?.storage?.onChanged.addListener((changes) => {
    if (changes.clickVibrantColor !== undefined) {
      applyVibrantSetting(changes.clickVibrantColor.newValue);
    }
  });
};
