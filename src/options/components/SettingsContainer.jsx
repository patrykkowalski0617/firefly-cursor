import SliderSize from "./Sliders/SliderSize";
import SliderTransparency from "./Sliders/SliderTransparency";
import SliderTemperature from "./Sliders/SliderTemperature";
import SliderMicroMotion from "./Sliders/SliderMicroMotion";
import SliderBreathSpeed from "./Sliders/SliderBreathSpeed";
import SliderfollowDelay from "./Sliders/SliderfollowDelay";
import SliderClickColorIntensity from "./Sliders/SliderClickColorIntensity";
import DarkModeSwitch from "./Switches/DarkModeSwitch";
import { Wrapper } from "./parts";

export default function SettingsContainer() {
  return (
    <>
      <Wrapper>
        <SliderSize />
      </Wrapper>
      <Wrapper>
        <SliderMicroMotion />
      </Wrapper>
      <Wrapper>
        <SliderBreathSpeed />
      </Wrapper>
      <Wrapper>
        <SliderTransparency />
      </Wrapper>
      <Wrapper>
        <SliderClickColorIntensity />
      </Wrapper>
      <Wrapper>
        <SliderTemperature />
      </Wrapper>
      <Wrapper>
        <SliderfollowDelay />
      </Wrapper>
      <Wrapper>
        <DarkModeSwitch />
      </Wrapper>
    </>
  );
}
