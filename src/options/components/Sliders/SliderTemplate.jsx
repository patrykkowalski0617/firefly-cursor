import { Wrapper, Label, Range } from './parts';

export default function SliderSetting({ id, label, min, max, value, gradient, onChange }) {
  return (
    <Wrapper>
      <Label>
        <span className="label-txt-shadow">{label}</span>
        <Range
          type="range"
          id={id}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          gradient={gradient}
        />
      </Label>
    </Wrapper>
  );
}
