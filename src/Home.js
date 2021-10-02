import React from "react";
import Converter from "./converter";
import Arithemetic from "./arithemetic";
import { Grid, Tab, Tabs, Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, hidden, value, index } = props;
  return <div hidden={hidden}>{children}</div>;
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient( 180.5deg,  rgba(46,255,171,1) 12.3%, rgba(252,251,222,0.46) 92% )",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Grid container justify="center" xs={12} style={{ flexBasis: 0 }}>
        <Typography
          style={{
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: 2,
            lineHeight: 2,
            color: "green"
          }}
        >
          Currency Converter
        </Typography>
      </Grid>
      <Grid xs={12} style={{ flexBasis: 0, marginLeft: 10, marginRight: 10 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: "#1aff66", height: 60, fontWeight: 700 }}
        >
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
