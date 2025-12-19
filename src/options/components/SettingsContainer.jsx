import SliderSize from "./Sliders/SliderSize";
import SliderOpacity from "./Sliders/SliderOpacity";
import SliderTemperature from "./Sliders/SliderTemperature";
import SliderMicroMotion from "./Sliders/SliderMicroMotion";
import SliderBreathSpeed from "./Sliders/SliderBreathSpeed";
import SliderfollowDelay from "./Sliders/SliderfollowDelay";
import SliderClickColorIntensity from "./Sliders/SliderClickColorIntensity";
import { SettingsContainerWrapper, Wrapper } from "./parts";
import ButtonDefaultSettings from "./Buttons/ButtonDefaultSettings";
import ButtonDefaultSettings_lightMode from "./Buttons/ButtonDefaultSettings_lightMode";
import ButtonDefaultSettings_crazy from "./Buttons/ButtonDefaultSettings_crazy";

export default function SettingsContainer() {
  return (
    <SettingsContainerWrapper>
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
        <SliderOpacity />
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
        <ButtonDefaultSettings />
      </Wrapper>
      <Wrapper>
        <ButtonDefaultSettings_lightMode />
      </Wrapper>
      <Wrapper>
        <ButtonDefaultSettings_crazy />
      </Wrapper>
    </SettingsContainerWrapper>
  );
}
