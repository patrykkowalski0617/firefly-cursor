import { getBreathSpeed } from './getVariablesFromStorage.js';

export const onClick = (fireflyCursor) => {
  let timeoutId = null;
  let clickVibrantColor = false;

  const getCalmColor = () => {
    const highLetters = 'ABCDEF';
    const getRandomHex = () =>
      highLetters[Math.floor(Math.random() * highLetters.length)];
    let color = '#';
    for (let i = 0; i < 3; i++) color += getRandomHex() + getRandomHex();
    return color;
  };

  const hexToRgbComponents = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const onClick = (e, cursor) => {
    const breathSpeed = getBreathSpeed();
    const clickFactor = 0.3;
    const baseDuration = 3000; // ms

    const finalClickDurationMs = Math.round(
      baseDuration / (breathSpeed * clickFactor + 1)
    );

    document.documentElement.style.setProperty(
      '--breath-click-duration',
      `${finalClickDurationMs}ms`
    );

    document.documentElement.style.setProperty(
      '--breath-multiplier',
      breathSpeed
    );

    const randomHexColor = getCalmColor();
    const rgb = hexToRgbComponents(randomHexColor);
    cursor.style.setProperty('--random-color-r', rgb.r);
    cursor.style.setProperty('--random-color-g', rgb.g);
    cursor.style.setProperty('--random-color-b', rgb.b);
    cursor.classList.remove('click');
    clearTimeout(timeoutId);
    void cursor.offsetWidth;
    cursor.classList.add('click');
    timeoutId = setTimeout(
      () => cursor.classList.remove('click'),
      finalClickDurationMs
    );
  };

  window.addEventListener('click', (e) => onClick(e, fireflyCursor));

  const applyVibrantSetting = (enabled) => {
    clickVibrantColor = !!enabled;
  };

  chrome?.storage?.sync.get(['clickVibrantColor'], (result) => {
    applyVibrantSetting(result.clickVibrantColor);
  });

  chrome?.storage?.onChanged.addListener((changes) => {
    if (changes.clickVibrantColor !== undefined) {
      applyVibrantSetting(changes.clickVibrantColor.newValue);
    }
  });
};
