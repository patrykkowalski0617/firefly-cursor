import styled from "styled-components";
import { thumbAppearance } from "../parts";

export const Label = styled.label`
  display: block;
  text-align: center;
`;

export const LabelTxt = styled.div`
  margin-bottom: 5px;
`;

export const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 32px;
  border-radius: 20px;
  outline: none;
  padding: 4px;
  overflow: hidden;
  background: ${({ isInverted, isWarm, customGradient }) => {
    const colors = isWarm ? "#e74c3c, #cfcfcf" : "#cfcfcf, #4a90e2";

    const direction = isInverted ? "to left" : "to right";
    console.log(customGradient);

    return customGradient
      ? customGradient
      : `linear-gradient(${direction}, ${colors})`;
  }};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbAppearance}
    cursor: pointer;
    margin-top: -8px;
    box-shadow: var(--thumb-external-shadow);
  }

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 8px;
  }
`;
