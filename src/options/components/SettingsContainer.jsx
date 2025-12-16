import SliderSize from "./Sliders/SliderSize";
import SliderIntensity from "./Sliders/SliderIntensity";
import SliderTemperature from "./Sliders/SliderTemperature";
import ToggleSetting from "./ToggleSetting";

export default function SettingsContainer() {
  return (
    <>
      <SliderSize />

      <SliderIntensity />

      <SliderTemperature />

      <ToggleSetting
        id="temperatureMode"
        hidden
        leftLabel={
          <>
            Temperature
            <br />
            Base on Setting
          </>
        }
        rightLabel={
          <>
            Temperature
            <br />
            Base on Time
          </>
        }
      />

      <ToggleSetting
        id="vibrantClickColor"
        leftLabel={
          <>
            Calm
            <br />
            Click Color
          </>
        }
        rightLabel={
          <>
            Vibrant
            <br />
            Click Color
          </>
        }
      />

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
