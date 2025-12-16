import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 240px;
  margin: 0 auto;
  height: 70px;
`;

export const Label = styled.label`
  display: block;
`;

export const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 12px;
  border-radius: 12px;
  background: ${({ gradient }) => gradient};
  margin: 10px 0;
  outline: none;
  box-shadow: 0 15px 18px rgba(0, 0, 0, 0.4);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #333;
    cursor: pointer;
    margin-top: -8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  &::-webkit-slider-runnable-track {
    height: 12px;
    border-radius: 12px;
  }
`;
