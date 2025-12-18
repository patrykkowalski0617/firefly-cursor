import ButtonTemplate from "./ButtonTemplate";
import { resetSettings } from "../../hooks/resetSettings";

const ButtonDefaultSettings = () => {
  const handleClick = (e) => {
    resetSettings();
  };

  return (
    <ButtonTemplate
      id="buttonDefaultSettings"
      label="Default settings"
      onClick={handleClick}
    />
  );
};

export default ButtonDefaultSettings;
