import { Button } from "@material-ui/core";
import React from "react";

export default function ButtonComponent({
  onPress = () => {},
  buttonStyle = {},
  label = "Button"
}) {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={onPress}
        style={buttonStyle}
      >
        {label}
      </Button>
    </>
  );
}
