import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const SliderBreathSpeed = () => {
  const [breathSpeed, setBreathSpeed] = useChromeStorage(
    "breathSpeed",
    defaultSettings.breathSpeed
  );
  return (
    <SliderTemplate
      id="breathSpeed"
      label="Breath Speed"
      min={10}
      max={200}
      value={breathSpeed}
      gradient="linear-gradient(to right, #cfcfcf, #4a90e2)"
      onChange={(e) => setBreathSpeed(Number(e.target.value))}
    />
  );
};
export default SliderBreathSpeed;
