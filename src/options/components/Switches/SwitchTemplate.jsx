import { Label, Input, Switch, LabelTxt } from "./parts";

const SwitchTemplate = ({
  id,
  leftLabel,
  rightLabel,
  hidden,
  checked,
  onChange,
}) => {
  return (
    <Label>
      <LabelTxt className="label-left">{leftLabel}</LabelTxt>
      <Input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <Switch />
      <LabelTxt className="label-right">{rightLabel}</LabelTxt>
    </Label>
  );
};

export default SwitchTemplate;
