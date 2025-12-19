import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import { defaultSettings } from "../../defaultSettings";

const SliderBreathSpeed = () => {
  const [breathSpeed, setBreathSpeed] = useChromeStorage(
    "breathSpeed",
    defaultSettings.darkMode.breathSpeed
  );
  return (
    <SliderTemplate
      id="breathSpeed"
      label="Breath"
      min={10}
      max={200}
      value={breathSpeed}
      onChange={(e) => setBreathSpeed(Number(e.target.value))}
      $disableClickEffect
    />
  );
};
export default SliderBreathSpeed;
