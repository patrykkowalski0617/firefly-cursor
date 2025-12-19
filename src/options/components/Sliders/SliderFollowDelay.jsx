import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";
import { defaultSettings } from "../../defaultSettings";

const SliderfollowDelay = () => {
  const [followDelay, setfollowDelay] = useChromeStorage(
    "followDelay",
    defaultSettings.darkMode.followDelay
  );
  document.documentElement.style.setProperty(
    "--follow-delay-multiplier",
    (followDelay / 50).toFixed(2)
  );
  return (
    <SliderTemplate
      id="followDelay"
      label="Lag"
      min={0}
      max={30}
      value={followDelay}
      onChange={(e) => setfollowDelay(Number(e.target.value))}
      $disableClickEffect
    />
  );
};
export default SliderfollowDelay;
