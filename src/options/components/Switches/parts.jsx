import styled from "styled-components";
import { inputStyle, thumbAppearance } from "../parts";

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const LabelTxt = styled.span`
  &.label-right {
    text-align: right;
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + span {
    background: linear-gradient(90deg, #f39c12, #e74c3c);
  }

  &:checked + span::before {
    transform: translateX(32px);
  }
`;

export const Switch = styled.span`
  ${inputStyle}
  width: 64px;
  position: relative;
  display: inline-block;
  &::before {
    ${thumbAppearance}
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    top: 0px;
    left: 0px;
    box-shadow: var(--switch-thumb-shadow);
  }
`;
