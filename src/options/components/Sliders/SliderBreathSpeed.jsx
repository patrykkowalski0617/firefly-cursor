import { useChromeStorage } from "../../hooks/useChromeStorage";
import SliderTemplate from "./SliderTemplate";

const SliderBreathSpeed = () => {
  const [breathSpeed, setBreathSpeed] = useChromeStorage("breathSpeed", 50);
  return (
    <>
      <SliderTemplate
        id="breathSpeed"
        label="Breath Speed"
        min={10}
        max={200}
        value={breathSpeed}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => setBreathSpeed(Number(e.target.value))}
      />
    </>
  );
};
export default SliderBreathSpeed;
