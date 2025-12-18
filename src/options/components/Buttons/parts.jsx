import styled from "styled-components";
import { inputStyle } from "../parts";

export const Label = styled.span`
  position: relative;
  z-index: 2;
`;
export const Button = styled.button`
  ${inputStyle}
  position: relative;
  display: inline-block;
  transition: box-shadow calc(1s * var(--follow-delay-multiplier)) linear;
  margin-top: 20px;
  font-size: 12px;
  &::before {
    background: linear-gradient(90deg, #f39c12, #e74c3c);
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover::before {
    opacity: 1;
  }
`;
