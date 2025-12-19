import styled, { css } from "styled-components";
import { boxSadowTransiton, inputStyle, thumbAppearance } from "../parts";

export const Label = styled.label`
  display: block;
  text-align: center;
`;

export const LabelTxt = styled.div`
  margin-bottom: 5px;
  height: 15px;
  font-size: 12px;
`;

const interpolateColor = (val, color, target = "#cfcfcf") => {
  return `color-mix(in srgb, ${color} ${val * 100}%, ${target})`;
};

export const Range = styled.input`
  ${inputStyle}
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  padding: 4px 0;
  ${boxSadowTransiton}
  ${({ $isWarm, $normalizedValue, $isInverted, $customGradient }) => {
    const colors = $isWarm
      ? `${interpolateColor($normalizedValue, "#e74c3c")}, #cfcfcf`
      : `${interpolateColor($normalizedValue, "#4a90e2")}, #cfcfcf`;

    const direction = $isInverted ? "to right" : "to left";

    const gradient = $customGradient
      ? $customGradient
      : `linear-gradient(${direction}, ${colors})`;

    return css`
      background-image: url("/slider.svg"), ${gradient};
    `;
  }}
  &::-webkit-slider-thumb {
    ${thumbAppearance}
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    margin-top: -8px;
    box-shadow: var(--thumb-external-shadow);
    ${boxSadowTransiton}
  }

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 8px;
  }
`;
