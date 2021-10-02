import { TextField } from "@material-ui/core";
import React from "react";
import SelectorComponent from "../selectorComponent";

export default function ConversionComponent({
  error = false,
  textFeildLabel = "value",
  textFeildValue,
  textFeildChangeFunc = () => {},
  helperText = "",
  textFeildStyle = {},
  selectorLabel = "Convert To",
  selectorValue = "Euro",
  availableOptions = [],
  classes = {},
  SelectorStyleClassName = "",
  selectorChangeFunc = () => {},
  showSelector = true
}) {
  return (
    <>
      <TextField
        error={error}
        label={textFeildLabel}
        value={textFeildValue}
        onChange={textFeildChangeFunc}
        helperText={helperText}
        variant="filled"
        type="text"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        style={textFeildStyle}
      />
      {showSelector ? (
        <SelectorComponent
          label={selectorLabel}
          value={selectorValue}
          availableOptions={availableOptions}
          classes={classes}
          styleClassName={SelectorStyleClassName}
          handleChange={selectorChangeFunc}
        />
      ) : null}
    </>
  );
}
