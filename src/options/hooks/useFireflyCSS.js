import { useEffect } from "react";
import { colorFromValue, lightenColor } from "../utils/color";

export function useFireflyCSS({ temperature, intensity, size }) {
  useEffect(() => {
    const root = document.documentElement;

    // opacity
    root.style.setProperty("--opacity", (intensity / 100).toFixed(2));

    // size
    root.style.setProperty("--size-multiplier", (size / 50).toFixed(2));

    // colors
    const base = colorFromValue(temperature);
    const light = lightenColor(base);

    root.style.setProperty(
      "--pulse-from",
      `rgba(${base.r},${base.g},${base.b},var(--opacity))`
    );

    root.style.setProperty(
      "--pulse-to",
      `rgba(${light.r},${light.g},${light.b},var(--opacity))`
    );
  }, [temperature, intensity, size]);
}
