import styled, { keyframes } from "styled-components";
import { inputStyle, boxSadowTransiton } from "../parts";

export const Label = styled.span`
  position: relative;
  z-index: 1;
  line-height: 2;
`;

const flickerOn = keyframes`
  0% {
    opacity: 0;
    background: linear-gradient(90deg, #f39c12, #e74d3c22);
  }
  15% {
    opacity: 1;
    background: linear-gradient(90deg, #f39c12, #e74d3c22);
  }
  30% {
    opacity: 0;
    background: linear-gradient(90deg, #f39c12, #e74d3c22);
  }
  45% {
    opacity: 1;
    background: linear-gradient(90deg, #f39c12, #e74c3c);
  }
  100% {
    opacity: 1;
    background: linear-gradient(90deg, #f39c12, #e74c3c);
  }
`;

export const flickerOff = keyframes`
  0% {
    opacity: 0;
    background: linear-gradient(90deg, #f39c12, #e74d3c7a);
  }
  15% {
    opacity: 1;
    background: linear-gradient(90deg, #f39c12, #e74d3c7a);
  }
  30% {
    opacity: 0;
    background: linear-gradient(90deg, #f39c12, #e74d3c7a);
  }
  100% {
    opacity: 0;
  }
`;

export const Button = styled.button`
  ${inputStyle}
  position: relative;
  display: inline-block;
  ${boxSadowTransiton}
  margin-top: 20px;
  font-size: 12px;
  &::before {
    content: "";
    filter: contrast(0.7);
    background: linear-gradient(90deg, #f39c12, #e74c3c);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  &:hover::before {
    animation: ${flickerOn} 0.6s linear forwards;
  }

  &:not(:hover)::before {
    animation: ${flickerOff} 0.6s 0.6s forwards;
  }
`;
