import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import { defaultSettings } from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings_lightMode = () => {
  const [defaultSetting] = useChromeStorage(
    "defaultSetting",
    defaultSettings.darkMode.defaultSetting
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.lightMode);
  };
  if (defaultSetting === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings_lightMode"
      label="Best for light mode"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings_lightMode;
