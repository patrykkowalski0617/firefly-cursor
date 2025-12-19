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
    --input-border-color: #4e4e4e;
    --thumb-gradient: radial-gradient(
      circle at 50% 50%,
      #d8d8d8 0%,
      #858585 35%,
      #464646 70%,
      #434343 100%
    );
    --settings-opacity: 0.95;
    background: #cacaca;
    color: #000;
  }

  body:not(.light-mode) {
    --input-border-color: #cacaca;
    --thumb-gradient: radial-gradient(
      circle at 50% 50%,
      #ececec 0%,
      #b5b5b5 35%,
      #434343 70%,
      #181818 100%
    );
    --settings-opacity: 1;
    background: #232323;
    color: #e0e0e0;
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
