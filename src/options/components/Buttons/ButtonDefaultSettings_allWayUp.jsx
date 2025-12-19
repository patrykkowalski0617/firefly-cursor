import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import defaultSettings from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings_allWayUp = () => {
  const [defaultSetting] = useChromeStorage(
    "defaultSetting",
    defaultSettings.allWayUpMode.defaultSetting
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.allWayUpMode);
  };
  if (defaultSetting === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <ButtonTemplate
      id="buttonDefaultSettings_allWayUp"
      label="All way up"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings_allWayUp;
