import styled from "styled-components";
import { thumbAppearance } from "../parts";

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
  width: 64px;
  height: 32px;
  border-radius: 32px;
  background: linear-gradient(90deg, #ffffff, #4a90e2);
  position: relative;
  display: inline-block;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    top: 4px;
    left: 4px;
    ${thumbAppearance}
    box-shadow: var(--switch-thumb-shadow);
  }
`;
