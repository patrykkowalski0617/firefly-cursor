import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import defaultSettings from "../../../shared/defaultSettings";

const SliderfollowDelay = () => {
  const [followDelay, setfollowDelay] = useChromeStorage(
    "followDelay",
    defaultSettings.followDelay
  );
  return (
    <SliderTemplate
      id="followDelay"
      label="Follow Cursor Delay"
      min={0}
      max={30}
      value={followDelay}
      gradient="linear-gradient(to right, #cfcfcf, #4a90e2)"
      onChange={(e) => setfollowDelay(Number(e.target.value))}
    />
  );
};
export default SliderfollowDelay;
