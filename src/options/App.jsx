import { createGlobalStyle } from 'styled-components';
import CursorPreview from './components/CursorPreview';
import SettingsContainer from './components/SettingsContainer';
import HiddenInfo from './components/HiddenInfo';

import { useChromeStorage } from './hooks/useChromeStorage';
import { useFireflyCSS } from './hooks/useFireflyCSS';

import { useEffect } from 'react';
import { colorFromValue, lightenColor } from './utils/color';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light only;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #494949;
    color: #e0e0e0;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }
`;

export default function App() {
  const [temperature, setTemperature] = useChromeStorage('temperature', 50);
  const [intensity, setIntensity] = useChromeStorage('intensity', 50);
  const [size, setSize] = useChromeStorage('sizeValue', 50);
  const [vibrant, setVibrant] = useChromeStorage('clickVibrantColor', false);
  const [lightPreview, setLightPreview] = useChromeStorage('previewLightMode', false);
  const [tempMode, setTempMode] = useChromeStorage('temperatureMode', false);

  useFireflyCSS({ temperature, intensity, size });

  useEffect(() => {
    if (!chrome?.storage?.sync) return;

    const color = colorFromValue(temperature);
    const rgb = `rgba(${color.r}, ${color.g}, ${color.b}, var(--opacity))`;

    const lighter = lightenColor(color, 0.3);
    const rgbLighter = `rgba(${lighter.r}, ${lighter.g}, ${lighter.b}, var(--opacity))`;

    // CSS variables (tak jak wcześniej)
    document.documentElement.style.setProperty('--pulse-from', rgb);
    document.documentElement.style.setProperty('--pulse-to', rgbLighter);

    // STORAGE
    chrome.storage.sync.set({
      temperature,
      pulseFrom: rgb,
      pulseTo: rgbLighter,
    });
  }, [temperature]);

  return (
    <>
      <GlobalStyle />
      <HiddenInfo />

      <div className="settingWrapper">
        <CursorPreview light={lightPreview} />

        <SettingsContainer
          temperature={temperature}
          setTemperature={setTemperature}
          intensity={intensity}
          setIntensity={setIntensity}
          size={size}
          setSize={setSize}
          vibrant={vibrant}
          setVibrant={setVibrant}
          lightPreview={lightPreview}
          setLightPreview={setLightPreview}
          tempMode={tempMode}
          setTempMode={setTempMode}
        />
      </div>
    </>
  );
}
