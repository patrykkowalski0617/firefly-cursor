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
  opacity: 0.95;
`;

export const inputStyle = css`
  border: 4px solid var(--input-border-color);
  width: 100%;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
`;
