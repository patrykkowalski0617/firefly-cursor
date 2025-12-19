import { useRef } from "react";
import { useMouseLightShadow } from "../../hooks/useMouseLightShadow";
import { Button, Label } from "./parts";

const ButtonTemplate = ({ id, label, onClick }) => {
  const buttonRef = useRef(null);

  useMouseLightShadow(buttonRef, true);

  return (
    <Button ref={buttonRef} onClick={onClick} id={id}>
      <Label>{label}</Label>
    </Button>
  );
};

export default ButtonTemplate;
