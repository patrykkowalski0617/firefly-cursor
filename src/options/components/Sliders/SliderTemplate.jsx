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
}) {
  const externalRef = useRef(null); // kontener z zewnętrznym cieniem
  const internalRef = useRef(null); // sam input z wewnętrznym cieniem

  // Zewnętrzny cień na kontenerze (opcjonalnie – możesz to usunąć jeśli nie chcesz)
  useMouseLightShadow(externalRef, false);

  // Wewnętrzny cień (inset) bezpośrednio na input range
  useMouseLightShadow(internalRef, true);

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
        ref={internalRef} // wewnętrzny cień działa na samym suwaku
      />
    </Label>
  );
}
