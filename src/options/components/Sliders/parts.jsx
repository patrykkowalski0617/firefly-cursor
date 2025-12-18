import styled from "styled-components";
import { inputStyle, thumbAppearance } from "../parts";

export const Label = styled.label`
  display: block;
  text-align: center;
`;

export const LabelTxt = styled.div`
  margin-bottom: 5px;
`;

// Funkcja pomocnicza do mieszania kolorów (HEX)
// val: 0-1, color: kolor docelowy, target: kolor do którego dążymy (#cfcfcf)
const interpolateColor = (val, color, target = "#cfcfcf") => {
  // Jeśli nie chcesz bawić się w logikę JS, możesz użyć CSS color-mix (zalecane)
  return `color-mix(in srgb, ${color} ${val * 100}%, ${target})`;
};

export const Range = styled.input`
  ${inputStyle}
  -webkit-appearance: none;
  width: 100%;
  outline: none;
  padding: 4px 0;
  background: ${({
    $isInverted,
    $isWarm,
    $customGradient,
    $normalizedValue,
  }) => {
    const colors = $isWarm
      ? `${interpolateColor($normalizedValue, "#e74c3c")}, #cfcfcf`
      : `${interpolateColor($normalizedValue, "#4a90e2")}, #cfcfcf`;
    const direction = $isInverted ? "to right" : "to left";
    return $customGradient
      ? $customGradient
      : `linear-gradient(${direction}, ${colors})`;
  }};
  &::-webkit-slider-thumb {
    ${thumbAppearance}
    -webkit-appearance: none;
    cursor: pointer;
    margin-top: -8px;
    box-shadow: var(--thumb-external-shadow);
  }

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 8px;
  }
`;
