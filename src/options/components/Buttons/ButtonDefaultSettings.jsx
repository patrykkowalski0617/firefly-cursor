import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import { defaultSettings } from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings = () => {
  const [defaultSetting] = useChromeStorage(
    "defaultSetting",
    defaultSettings.darkMode.defaultSetting
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.darkMode);
  };
  if (defaultSetting === "dark") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings"
      label="Best for dark mode"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings;
