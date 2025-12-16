import { createGlobalStyle, css } from 'styled-components';
import SettingsContainer from './components/SettingsContainer';

import { useChromeStorage } from './hooks/useChromeStorage';

import { useEffect } from 'react';

const rootStyles = css`
  :root {
    color-scheme: light only;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #101010;
    color: #e0e0e0;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }

  #root {
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`${rootStyles}`;

export default function App() {
  const [intensity, setIntensity] = useChromeStorage('intensity', 50);
  const [size, setSize] = useChromeStorage('size', 50);
  const [vibrant, setVibrant] = useChromeStorage('clickVibrantColor', false);
  const [lightPreview, setLightPreview] = useChromeStorage('previewLightMode', false);
  const [tempMode, setTempMode] = useChromeStorage('temperatureMode', false);

  return (
    <>
      <GlobalStyle />

      <SettingsContainer
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
    </>
  );
}
