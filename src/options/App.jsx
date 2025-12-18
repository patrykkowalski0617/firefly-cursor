import { createGlobalStyle, css } from "styled-components";
import SettingsContainer from "./components/SettingsContainer";

const rootStyles = css`
  :root {
    color-scheme: light only;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 11px;
    background: #232323;
    color: #e0e0e0;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    transition:
      background,
      color 0.3s;
  }
  body.light-mode {
    background: #cacaca;
    color: #101010;
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
