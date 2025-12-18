import { useRef } from "react";
import { useMouseLightShadow } from "../../hooks/useMouseLightShadow";
import { Label, Input, Switch, LabelTxt } from "./parts";

const SwitchTemplate = ({ id, leftLabel, rightLabel, checked, onChange }) => {
  const switchRef = useRef(null);

  useMouseLightShadow(switchRef, true);

  useMouseLightShadow(
    switchRef,
    false,
    { maxOffset: 4, maxBlur: 2 },
    "--switch-thumb-shadow"
  );

  return (
    <Label>
      <LabelTxt className="label-left">{leftLabel}</LabelTxt>
      <Input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <Switch ref={switchRef} />
      <LabelTxt className="label-right">{rightLabel}</LabelTxt>
    </Label>
  );
};

export default SwitchTemplate;
