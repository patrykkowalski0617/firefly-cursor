import { useChromeStorage } from "../../hooks/useChromeStorage";
import SwitchTemplate from "./SwitchTemplate";
import { defaultSettings } from "../../defaultSettings";

const DefaultSettingsButton = () => {
  const [defaultSetting, setDefaultSetting] = useChromeStorage(
    "defaultSetting",
    defaultSettings.darkMode.defaultSetting
  );

  const handleToggle = (e) => {
    setDefaultSetting(e.target.checked ? "dark" : "light");
  };

  if (defaultSetting !== "dark") {
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
      checked={true}
      onChange={handleToggle}
    />
  );
};

export default DefaultSettingsButton;
