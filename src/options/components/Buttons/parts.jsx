import styled, { keyframes } from "styled-components";
import { inputStyle, boxSadowTransiton } from "../parts";

export const Label = styled.span`
  position: relative;
  z-index: 2;
`;

const flickerOn = keyframes`
  0%   { opacity: 0; }    
  10%  { opacity: 1; }    
  20%  { opacity: 0; }    
  30%  { opacity: 1; }    
  100% { opacity: 1; }    
`;

export const flickerOff = keyframes`
  0%   { opacity: 0; }    
  10%  { opacity: 1; }    
  20%  { opacity: 0; }    
  100% { opacity: 0; }    
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
    background: linear-gradient(90deg, #f39c12, #e74c3c);
    filter: contrast(0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 1;
    opacity: 0;
  }

  &:hover::before {
    animation: ${flickerOn} 0.45s linear forwards;
  }

  &:not(:hover)::before {
    animation: ${flickerOff} 0.3s linear forwards;
  }
`;
