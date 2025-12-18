import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const SliderMicroMotion = () => {
  const [microMotion, setMicroMotion] = useChromeStorage(
    "microMotion",
    defaultSettings.microMotion
  );
  return (
    <SliderTemplate
      id="microMotion"
      label="Micro Motion Range"
      min={0}
      max={50}
      value={microMotion}
      onChange={(e) => setMicroMotion(Number(e.target.value))}
    />
  );
};
export default SliderMicroMotion;
