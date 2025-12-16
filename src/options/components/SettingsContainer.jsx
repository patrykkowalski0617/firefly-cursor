import SliderSetting from './SliderSetting/SliderSetting';
import SliderTemperature from './SliderSetting/SliderTemperature';
import ToggleSetting from './ToggleSetting';

export default function SettingsContainer({ setIntensity, setSize }) {
  return (
    <>
      <SliderSetting
        id="sizeSlider"
        label="Size"
        min={30}
        max={70}
        value={50}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => setSize(Number(e.target.value))}
      />

      <SliderSetting
        id="intensitySlider"
        label="Intensity"
        min={30}
        max={80}
        value={50}
        gradient="linear-gradient(to right, #cfcfcf, #d29d52)"
        onChange={(e) => setIntensity(Number(e.target.value))}
      />
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
