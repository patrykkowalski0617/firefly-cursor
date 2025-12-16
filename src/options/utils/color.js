export const colorFromValue = (val) => {
  if (val <= 50) {
    const t = val / 50;
    const r = Math.round(150 + t * (255 - 150));
    const g = Math.round(200 + t * (255 - 200));
    const b = 255;
    return { r, g, b };
  } else {
    const t = (val - 50) / 50;
    const r = 255;
    const g = Math.round(255 - t * 155);
    const b = Math.round(255 - t * 255);
    return { r, g, b };
  }
};

export const lightenColor = (color, factor = 0.3) => ({
  r: Math.min(255, Math.round(color.r + (255 - color.r) * factor)),
  g: Math.min(255, Math.round(color.g + (255 - color.g) * factor)),
  b: Math.min(255, Math.round(color.b + (255 - color.b) * factor)),
});
