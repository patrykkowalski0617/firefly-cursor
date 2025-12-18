import styled from "styled-components";

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
  background: ${({ gradient }) => gradient};
  margin: 10px 0;
  outline: none;
  box-shadow: ${({ internalShadow }) => internalShadow};
  padding: 4px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 50%,
      #888888 0%,
      #444444 25%,
      #111111 50%,
      #000000 100%
    );
    cursor: pointer;
    margin-top: -8px;
    // tutaj daj external shadow
  }
  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 8px;
  }
`;
