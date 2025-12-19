import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import defaultSettings from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings_crazy = () => {
  const [defaultSetting] = useChromeStorage(
    "defaultSetting",
    defaultSettings.crazyMode.defaultSetting
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.crazyMode);
  };
  if (defaultSetting === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings_crazy"
      label="Best for fun"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings_crazy;
