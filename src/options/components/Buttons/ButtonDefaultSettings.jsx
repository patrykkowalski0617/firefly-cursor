import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import { defaultSettings } from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings = () => {
  const [isDarkMode, setIsDarkMode] = useChromeStorage(
    "isDarkMode",
    defaultSettings.darkMode.isDarkMode
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.darkMode);
    setIsDarkMode(true);
  };
  if (!isDarkMode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings"
      label="Default settings - dark mode"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings;
