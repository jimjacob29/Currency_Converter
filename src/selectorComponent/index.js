import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

export default function SelectorComponent({
  label = "",
  value = "Euro",
  availableOptions = [],
  styleClassName = "formControl",
  classes = {},
  handleChange = () => {}
}) {
  return (
    <FormControl variant="filled" className={classes[styleClassName]}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {availableOptions.map((op) => (
          <MenuItem key={op.value} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
