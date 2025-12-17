import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderfollowDelay = () => {
  const [followDelay, setfollowDelay] = useChromeStorage("followDelay", 0);
  return (
    <>
      <SliderTemplate
        id="followDelay"
        label="Follow Cursor Delay"
        min={0}
        max={30}
        value={followDelay}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => setfollowDelay(Number(e.target.value))}
      />
    </>
  );
};
export default SliderfollowDelay;
