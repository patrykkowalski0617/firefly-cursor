import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderSize = () => {
  const [size, setSize] = useChromeStorage("size", 50);
  return (
    <>
      <SliderTemplate
        id="sizeSlider"
        label="Size"
        min={30}
        max={70}
        value={size}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </>
  );
};
export default SliderSize;
