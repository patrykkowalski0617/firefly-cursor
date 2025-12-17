import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderClickColorIntensity = () => {
  const [clickColorIntensity, setClickColorIntensity] = useChromeStorage(
    "clickColorIntensity",
    50
  );
  return (
    <>
      <SliderTemplate
        id="clickColorIntensity"
        label="Click Color Intensity"
        min={0}
        max={100}
        value={clickColorIntensity}
        gradient="linear-gradient(to right, #cfcfcf, #d29d52)"
        onChange={(e) => setClickColorIntensity(Number(e.target.value))}
      />
    </>
  );
};
export default SliderClickColorIntensity;
