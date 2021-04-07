import React from "react";
import { Button } from "./button";

export const PrimaryButton = () => {
  return (
    <Button variant="primary" onClick={() => alert("Clicked!")}>
      Primary Button
    </Button>
  );
};
export const SecondaryButton = () => {
  return (
    <Button variant="secondary" onClick={() => alert("Clicked!")}>
      Secondary Button
    </Button>
  );
};
export const DisabledButton = () => {
  return (
    <Button disabled variant="primary">
      Disabled Button
    </Button>
  );
};