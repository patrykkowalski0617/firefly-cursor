import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import { defaultSettings } from "../../defaultSettings";

const SliderSize = () => {
  const [size, setSize] = useChromeStorage("size", defaultSettings.size);
  return (
    <SliderTemplate
      id="sizeSlider"
      label="Size"
      min={20}
      max={70}
      value={size}
      gradient="linear-gradient(to right, #cfcfcf, #4a90e2)"
      onChange={(e) => setSize(Number(e.target.value))}
    />
  );
};
export default SliderSize;
