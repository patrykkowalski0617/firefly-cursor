import styled from "styled-components";

const Hidden = styled.div`
  display: none;
`;

export default function HiddenInfo() {
  return (
    <Hidden className="fireflyCursorUserSettings">
      This div is just information for javascript
    </Hidden>
  );
}
