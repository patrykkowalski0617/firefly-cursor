import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const SliderTemperature = () => {
  const [temperature, setTemperature] = useChromeStorage(
    "temperature",
    defaultSettings.temperature
  );
  return (
    <SliderTemplate
      id="colorSlider"
      label="Temperature"
      min={0}
      max={100}
      value={temperature}
      customGradient="linear-gradient(to right, #4a90e2, #ffffff, #f39c12, #e74c3c)"
      onChange={(e) => setTemperature(Number(e.target.value))}
    />
  );
};
export default SliderTemperature;
