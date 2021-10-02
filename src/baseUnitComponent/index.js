import { Grid, Typography } from "@material-ui/core";
import React from "react";
import SelectorComponent from "../selectorComponent";

export default function BaseUnitComponent({
  titleStyle = {},
  titleText = " Select Base Unit",
  selectorLabel = "Base Unit",
  selectorValue = "Euro",
  availableOptions = [],
  selectorStyleClassName = "",
  handleChange = () => {},
  classes = {}
}) {
  return (
    <>
      <Typography style={titleStyle}>{titleText}</Typography>
      <Grid justify="center">
        <SelectorComponent
          label={selectorLabel}
          value={selectorValue}
          availableOptions={availableOptions}
          classes={classes}
          styleClassName={selectorStyleClassName}
          handleChange={handleChange}
        />
      </Grid>
    </>
  );
}
