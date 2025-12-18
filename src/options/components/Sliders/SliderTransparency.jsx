import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const SliderTransparency = () => {
  const [transparency, setTransparency] = useChromeStorage(
    "transparency",
    defaultSettings.transparency
  );
  const min = 15;
  const max = 100;
  return (
    <SliderTemplate
      id="transparencySlider"
      label="Transparency"
      min={min}
      max={max}
      value={max - transparency + min}
      gradient="linear-gradient(to right, #e74c3c,#cfcfcf)"
      onChange={(e) => {
        const sliderValue = Number(e.target.value);
        setTransparency(max - sliderValue + min);
      }}
    />
  );
};
export default SliderTransparency;
