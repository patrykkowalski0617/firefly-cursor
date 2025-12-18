import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 240px;
  margin: 10px auto 0;
  height: 70px;
`;

export const thumbAppearance = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    #888888 0%,
    #444444 35%,
    #1a1a1a 70%,
    #050505 100%
  );
  opacity: 0.95;
`;
