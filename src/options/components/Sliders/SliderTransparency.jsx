import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderTransparency = () => {
  const [transparency, setTransparency] = useChromeStorage("transparency", 50);
  return (
    <>
      <SliderTemplate
        id="transparencySlider"
        label="Transparency"
        min={20}
        max={100}
        value={100 - transparency + 20}
        gradient="linear-gradient(to right, #d29d52,#cfcfcf)"
        onChange={(e) => {
          const sliderValue = Number(e.target.value);
          setTransparency(100 - sliderValue + 20);
        }}
      />
    </>
  );
};
export default SliderTransparency;
