import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderIntensity = () => {
  const [intensity, setIntensity] = useChromeStorage("intensity", 50);
  return (
    <>
      <SliderTemplate
        id="intensitySlider"
        label="Intensity"
        min={30}
        max={80}
        value={intensity}
        gradient="linear-gradient(to right, #cfcfcf, #d29d52)"
        onChange={(e) => setIntensity(Number(e.target.value))}
      />
    </>
  );
};
export default SliderIntensity;
