import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import { defaultSettings } from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings_lightMode = () => {
  const [isDarkMode, setIsDarkMode] = useChromeStorage(
    "isDarkMode",
    defaultSettings.darkMode.isDarkMode
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.lightMode);
    setIsDarkMode(false);
  };
  if (!isDarkMode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings_lightMode"
      label="Default settings - light mode"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings_lightMode;
