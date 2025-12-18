import { useMouseLightShadow } from "../../hooks/useMouseLightShadow";
import { Label, Range, LabelTxt } from "./parts";
import { useRef } from "react";

export default function SliderTemplate({
  id,
  label,
  min,
  max,
  value,
  gradient,
  onChange,
  isWarm,
  isInverted,
  customGradient,
}) {
  const internalRef = useRef(null);
  useMouseLightShadow(internalRef, true);

  useMouseLightShadow(
    internalRef,
    false,
    { maxOffset: 5, maxBlur: 2 },
    "--thumb-external-shadow"
  );

  return (
    <Label>
      <LabelTxt>{label}</LabelTxt>
      <Range
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        gradient={gradient}
        ref={internalRef}
        customGradient={customGradient}
        isWarm={isWarm}
        isInverted={isInverted}
      />
    </Label>
  );
}
