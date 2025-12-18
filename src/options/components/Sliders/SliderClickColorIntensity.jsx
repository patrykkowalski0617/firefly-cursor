import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import { defaultSettings } from "../../defaultSettings";

const SliderClickColorIntensity = () => {
  const [clickColorIntensity, setClickColorIntensity] = useChromeStorage(
    "clickColorIntensity",
    defaultSettings.clickColorIntensity
  );
  return (
    <SliderTemplate
      id="clickColorIntensity"
      label="Click Color Intensity"
      min={0}
      max={100}
      $isWarm
      value={clickColorIntensity}
      onChange={(e) => setClickColorIntensity(Number(e.target.value))}
    />
  );
};
export default SliderClickColorIntensity;
