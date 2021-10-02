import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../buttonComponent";
import ConversionComponent from "../conversionComponent";
import DisplayComponent from "../displayComponent";
import { useStyles, usedStyles } from "./style";

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

  // below function handles base unit changes
  const handleBaseUnitChange = (value) => {
    setConvertedValue(null);
    setBaseUnit(value);
  };

  // below function handles the unit changes to which textfeild is
  const handleConvertUnitChange = (value) => {
    setConvertedValue(null);
    setConvertUnit(value);
  };

  //below function do the conversion logic on button press
  const handleConversion = () => {
    if (!convertValue || textFeildError) {
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

  // below function performs the changes in the textfeild box
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
        setConvertValue(convertValue);
        setTextFeildError(true);
        setHelperTextValue("Enter Valid Characters");
        return;
      }
    }
    if (!Number.isInteger(lc)) {
      setConvertValue(convertValue);
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
        className={classes.mainContainer}
        direction="column"
      >
        <BaseUnitComponent
          titleStyle={usedStyles.dropDownTitleStyle}
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
        className={classes.mainContainer}
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
        className={classes.mainContainer}
      >
        <ButtonComponent
          onPress={handleConversion}
          buttonStyle={usedStyles.convButtonStyle}
          label="Convert"
        />
      </Grid>
      {convertedValue ? (
        <DisplayComponent
          textStyle={usedStyles.ansDispStyle}
          text={`The conversion value of ${convertValue} ${convertUnit} is ${convertedValue} ${baseUnit}`}
        />
      ) : (
        <Grid
          container
          justify="center"
          xs={12}
          className={classes.mainContainer}
        />
      )}
    </>
  );
}
