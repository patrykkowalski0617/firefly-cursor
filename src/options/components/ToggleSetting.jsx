import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 240px;
  margin: 0 auto;
  padding: 12px 0;
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;

  &:checked + span {
    background: linear-gradient(90deg, #4a90e2, #7b68ee);
  }

  &:checked + span::before {
    transform: translateX(32px);
  }
`;

const Switch = styled.span`
  width: 64px;
  height: 32px;
  border-radius: 32px;
  background: linear-gradient(90deg, #ffb6c1, #a8e6cf);
  position: relative;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.4), 0 15px 18px rgba(0,0,0,0.4);

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

export default function ToggleSetting({
  id,
  leftLabel,
  rightLabel,
  hidden,
}) {
  return (
    <Wrapper hidden={hidden}>
      <Label>
        <span className="label-left label-txt-shadow">{leftLabel}</span>
        <Input type="checkbox" id={id} />
        <Switch />
        <span className="label-right label-txt-shadow">{rightLabel}</span>
      </Label>
    </Wrapper>
  );
}
