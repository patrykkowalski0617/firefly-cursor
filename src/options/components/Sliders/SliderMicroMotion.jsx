import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../defaultSettings";

const SliderMicroMotion = () => {
  const [microMotion, setMicroMotion] = useChromeStorage(
    "microMotion",
    defaultSettings.darkMode.microMotion
  );
  return (
    <SliderTemplate
      id="microMotion"
      label="Micromovement"
      min={0}
      max={50}
      value={microMotion}
      onChange={(e) => setMicroMotion(Number(e.target.value))}
      $disableClickEffect
    />
  );
};
export default SliderMicroMotion;
