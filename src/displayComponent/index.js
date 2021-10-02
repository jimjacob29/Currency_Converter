import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function DisplayComponent({ textStyle = {}, text = "" }) {
  return (
    <Grid
      container
      justify="center"
      xs={12}
      style={{ marginTop: 50, flexBasis: 0 }}
    >
      <Typography style={textStyle}>{text}</Typography>
    </Grid>
  );
}
