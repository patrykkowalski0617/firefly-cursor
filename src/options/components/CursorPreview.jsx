import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100vw - 30px);
  max-width: 370px;
  height: 250px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222325;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 15px 18px rgba(0, 0, 0, 0.4);
`;

const Label = styled.div`
  position: absolute;
  bottom: 6px;
  right: 20px;
  font-style: italic;
  opacity: 0.4;

  span {
    opacity: 0.6;
  }
`;

export default function CursorPreview() {
  return (
    <Wrapper>
      <Label>
        <span>Preview.</span> Click me.
      </Label>
    </Wrapper>
  );
}
