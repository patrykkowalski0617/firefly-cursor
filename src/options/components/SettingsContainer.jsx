import SliderSize from "./Sliders/SliderSize";
import SliderTransparency from "./Sliders/SliderTransparency";
import SliderTemperature from "./Sliders/SliderTemperature";
import ToggleSetting from "./ToggleSetting";
import SliderMicroMotion from "./Sliders/SliderMicroMotion";
import SliderBreathSpeed from "./Sliders/SliderBreathSpeed";
import SliderfollowDelay from "./Sliders/SliderfollowDelay";
import SliderClickColorIntensity from "./Sliders/SliderClickColorIntensity";

export default function SettingsContainer() {
  return (
    <>
      <SliderSize />

      <SliderMicroMotion />

      <SliderBreathSpeed />

      <SliderTransparency />

      <SliderClickColorIntensity />

      <SliderTemperature />

      <SliderfollowDelay />

      <ToggleSetting
        id="previewLightMode"
        leftLabel={
          <>
            Dark mode
            <br />
            preview
          </>
        }
        rightLabel={
          <>
            Light mode
            <br />
            preview
          </>
        }
      />
    </>
  );
}
