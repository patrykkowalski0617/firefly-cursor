import { createGlobalStyle, css } from "styled-components";
import SettingsContainer from "./components/SettingsContainer";

import { useChromeStorage } from "./hooks/useChromeStorage";

import { useEffect } from "react";

const rootStyles = css`
  :root {
    color-scheme: light only;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #101010;
    color: #e0e0e0;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
  }

  #firefly-cursor-root {
    width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`${rootStyles}`;

export default function App() {
  return (
    <>
      <GlobalStyle />

      <SettingsContainer />
    </>
  );
}
