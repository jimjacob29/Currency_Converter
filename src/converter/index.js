import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../buttonComponent";
import ConversionComponent from "../conversionComponent";
import DisplayComponent from "../displayComponent";
import { useStyles } from "./style";

import {
  conversationData,
  availableBaseUnit,
  availableConvertUnit
} from "./conversationData";
import BaseUnitComponent from "../baseUnitComponent";

export default function Converter() {
  const classes = useStyles();
  const [baseUnit, setBaseUnit] = React.useState("Euro");
  const [convertUnit, setConvertUnit] = React.useState("Euro");
  const [convertValue, setConvertValue] = React.useState(null);
  const [helperTextValue, setHelperTextValue] = React.useState("");
  const [textFeildError, setTextFeildError] = React.useState(false);
  const [convertedValue, setConvertedValue] = React.useState(null);

  const handleBaseUnitChange = (value) => {
    setConvertedValue(null);
    setBaseUnit(value);
  };
  const handleConvertUnitChange = (value) => {
    setConvertedValue(null);
    setConvertUnit(value);
  };
  const handleConversion = () => {
    if (!convertValue) {
      setTextFeildError(true);
      setHelperTextValue("Enter Value");
      return;
    }
    const bUnit = baseUnit.toLowerCase();
    const cUnit = convertUnit.toLowerCase();
    const cValue = parseFloat(convertValue);
    const cFactor = conversationData[cUnit][bUnit];
    setConvertedValue((cValue * cFactor).toFixed(2));
  };
  const handleConvertValueChange = (e) => {
    setTextFeildError(false);
    setConvertedValue(null);
    setHelperTextValue("");
    const { value } = e.target;
    const l = value.length;
    const lc = parseInt(value[l - 1]);
    if (!value) {
      setConvertValue("");
      return;
    }
    if (value[l - 1] === ".") {
      if (!value.slice(0, l - 1).includes(".")) {
        setConvertValue(value);
        return;
      } else {
        setTextFeildError(true);
        setHelperTextValue("Enter Valid Characters");
        return;
      }
    }
    console.log(Number.isInteger(lc));
    if (!Number.isInteger(lc)) {
      setTextFeildError(true);
      setHelperTextValue("Enter Valid Characters");
      return;
    }
    setConvertValue(value);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        xs={12}
        style={{ marginTop: 50, flexBasis: 0 }}
        direction="column"
      >
        <BaseUnitComponent
          titleStyle={{
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: 2,
            lineHeight: 2,
            color: "#000000"
          }}
          titleText="Select Base Unit"
          selectorLabel="Base Unit"
          selectorValue={baseUnit}
          availableOptions={availableBaseUnit}
          classes={classes}
          selectorStyleClassName="baseUnitFormControl"
          handleChange={handleBaseUnitChange}
        />
      </Grid>
      <Grid
        container
        xs={12}
        justify="center"
        style={{ marginTop: 50, flexBasis: 0 }}
      >
        <ConversionComponent
          error={textFeildError}
          textFeildLabel="Enter Value"
          textFeildValue={convertValue}
          textFeildChangeFunc={handleConvertValueChange}
          helperText={helperTextValue}
          textFeildStyle={{ width: 300 }}
          selectorLabel="Convert To"
          selectorValue={convertUnit}
          availableOptions={availableConvertUnit}
          classes={classes}
          SelectorStyleClassName="convertUnitFormControl"
          selectorChangeFunc={handleConvertUnitChange}
        />
      </Grid>
      <Grid
        container
        justify="center"
        xs={12}
        style={{ marginTop: 30, flexBasis: 0 }}
      >
        <ButtonComponent
          onPress={handleConversion}
          buttonStyle={{
            color: "white",
            backgroundColor: "blue",
            fontSize: 20,
            fontWeight: 600
          }}
          label="Convert"
        />
      </Grid>
      {convertedValue ? (
        <DisplayComponent
          textStyle={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 2,
            lineHeight: 2,
            color: "red",
            backgroundImage:
              "radial-gradient( circle 780.6px at 10% 20%,  rgba(133,255,189,1) 0%, rgba(255,251,125,1) 90.7% )",
            width: "50%"
          }}
          text={`The conversion value of ${convertValue} ${convertUnit} is ${convertedValue} ${baseUnit}`}
        />
      ) : (
        <Grid
          container
          justify="center"
          xs={12}
          style={{ marginTop: 50, flexBasis: 0 }}
        />
      )}
    </>
  );
}
