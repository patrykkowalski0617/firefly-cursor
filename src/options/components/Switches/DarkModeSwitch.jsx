import { useChromeStorage } from "../../hooks/useChromeStorage";
import SwitchTemplate from "./SwitchTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useChromeStorage(
    "isDarkMode",
    defaultSettings.isDarkMode
  );

  const handleToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };

  if (!isDarkMode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <SwitchTemplate
      id="previewLightMode"
      leftLabel={
        <>
          Light mode
          <br />
          preview
        </>
      }
      rightLabel={
        <>
          Dark mode
          <br />
          preview
        </>
      }
      checked={isDarkMode}
      onChange={handleToggle}
    />
  );
};

export default DarkModeSwitch;
