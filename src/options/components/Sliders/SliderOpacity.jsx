import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import { defaultSettings } from "../../defaultSettings";

const SliderOpacity = () => {
  const [opacity, setOpacity] = useChromeStorage(
    "opacity",
    defaultSettings.opacity
  );
  const min = 15;
  const max = 100;
  return (
    <SliderTemplate
      id="opacitySlider"
      label="Opacity"
      min={min}
      max={max}
      value={max - opacity + min}
      $isWarm
      onChange={(e) => {
        const sliderValue = Number(e.target.value);
        setOpacity(max - sliderValue + min);
      }}
    />
  );
};
export default SliderOpacity;
