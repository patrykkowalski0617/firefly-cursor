import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 240px;
  margin: 10px auto 0;
  height: 70px;
`;

export const SettingsContainerWrapper = styled.div`
  opacity: var(--settings-opacity);
`;

export const thumbAppearance = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--thumb-gradient);
`;

export const inputStyle = css`
  border: 4px solid var(--input-border-color);
  width: 100%;
  height: 32px;
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    filter: contrast(1.4);
  }
`;

export const boxSadowTransiton = css`
  transition:
    box-shadow calc(1s * var(--follow-delay-multiplier)) linear,
    transform 0.1s;
`;
