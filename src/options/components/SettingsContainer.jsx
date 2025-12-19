import { SettingsContainerWrapper, Wrapper } from "./parts";
import {
  SliderSize,
  SliderOpacity,
  SliderTemperature,
  SliderMicroMotion,
  SliderBreathSpeed,
  SliderFollowDelay,
  SliderClickColorIntensity,
} from "./Sliders";
import {
  ButtonDefaultSettings,
  ButtonDefaultSettings_lightMode,
  ButtonDefaultSettings_allWayUp,
} from "./Buttons";

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
        <SliderFollowDelay />
      </Wrapper>
      <Wrapper>
        <ButtonDefaultSettings />
      </Wrapper>
      <Wrapper>
        <ButtonDefaultSettings_lightMode />
      </Wrapper>
      <Wrapper>
        <ButtonDefaultSettings_allWayUp />
      </Wrapper>
    </SettingsContainerWrapper>
  );
}
