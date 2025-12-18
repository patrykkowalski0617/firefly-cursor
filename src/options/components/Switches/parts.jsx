import styled from "styled-components";

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
  box-shadow:
    inset 0 2px 8px rgba(0, 0, 0, 0.4),
    0 15px 18px rgba(0, 0, 0, 0.4);

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.3s ease;
  }
`;
