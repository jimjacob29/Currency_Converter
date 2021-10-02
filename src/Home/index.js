import React from "react";
import Converter from "../converter";
import Arithemetic from "../arithemetic";
import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { useStyles } from "./style";

function TabPanel(props) {
  const { children, hidden } = props;
  return <div hidden={hidden}>{children}</div>;
}

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" xs={12} style={{ flexBasis: 0 }}>
        <Typography className={classes.titleContainer}>
          Currency Converter
        </Typography>
      </Grid>
      <Grid xs={12} className={classes.tabContainer}>
        <Tabs value={value} onChange={handleChange} className={classes.tabs}>
          <Tab
            style={{
              fontWeight: 700,
              backgroundColor: value === 0 ? "#145214" : "",
              height: 60,
              color: value === 0 ? "white" : ""
            }}
            label="Convert"
          />
          <Tab
            style={{
              fontWeight: 700,
              backgroundColor: value === 1 ? "#145214" : "",
              height: 60,
              color: value === 1 ? "white" : ""
            }}
            label="Calculate"
          />
        </Tabs>
      </Grid>
      <TabPanel value={value} hidden={value !== 0} index={0}>
        <Converter />
      </TabPanel>
      <TabPanel value={value} hidden={value !== 1} index={1}>
        <Arithemetic />
      </TabPanel>
    </div>
  );
}
