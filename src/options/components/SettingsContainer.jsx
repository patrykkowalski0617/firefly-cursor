import SliderSize from './Sliders/SliderSize';
import SliderIntensity from './Sliders/SliderIntensity';
import SliderTemperature from './Sliders/SliderTemperature';
import ToggleSetting from './ToggleSetting';
import SliderMicroMotion from './Sliders/SliderMicroMotion';
import SliderBreathSpeed from './Sliders/SliderBreathSpeed';
import SliderfollowDelay from './Sliders/SliderfollowDelay';
import SliderClickIntensity from './Sliders/SliderClickIntensity';

export default function SettingsContainer() {
  return (
    <>
      <SliderSize />

      <SliderMicroMotion />

      <SliderBreathSpeed />

      <SliderIntensity />

      <SliderClickIntensity />

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
