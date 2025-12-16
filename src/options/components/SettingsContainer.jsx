import styled from 'styled-components';
import SliderSetting from './SliderSetting/SliderSetting';
import ToggleSetting from './ToggleSetting';

const Container = styled.div`
  height: 250px;
  overflow: auto;
`;

export default function SettingsContainer({ temperature, setTemperature }) {
  return (
    <Container>
      <SliderSetting
        id="sizeSlider"
        label="Size"
        min={30}
        max={70}
        value={50}
        gradient="linear-gradient(to right, #cfcfcf, #6587ff)"
        onChange={(e) => null}
      />

      <SliderSetting
        id="intensitySlider"
        label="Intensity"
        min={30}
        max={80}
        value={50}
        gradient="linear-gradient(to right, #cfcfcf, #d29d52)"
        onChange={(e) => null}
      />

      <SliderSetting
        id="colorSlider"
        label="Temperature"
        min={0}
        max={100}
        value={temperature}
        gradient="linear-gradient(to right, #4a90e2, #ffffff, #f39c12, #e74c3c)"
        onChange={(e) => setTemperature(Number(e.target.value))}
      />

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
    </Container>
  );
}
