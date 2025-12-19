import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";
import { defaultSettings } from "../../defaultSettings";
import { useChromeStorage } from "../../hooks/useChromeStorage";

const ButtonDefaultSettings_crazy = () => {
  const [isDarkMode, setIsDarkMode] = useChromeStorage(
    "isDarkMode",
    defaultSettings.crazyMode.isDarkMode
  );

  const handleClick = (e) => {
    resetSettings(defaultSettings.crazyMode);
    setIsDarkMode(true);
  };
  if (!isDarkMode) {
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
