import { Grid } from "@material-ui/core";
import React from "react";
import BaseUnitComponent from "../baseUnitComponent";
import ButtonComponent from "../buttonComponent";
import ConversionComponent from "../conversionComponent";
import {
  conversationData,
  availableBaseUnit,
  availableOperation,
  availableConvertUnit
} from "../converter/conversationData";
import DisplayComponent from "../displayComponent";
import { useStyles, usedStyles } from "./style";
import { Money } from "./moneyConstructor";

const valueFirst = new Money(null, "Euro");
const valueSecond = new Money(null, "Euro");

export default function Arithemetic() {
  const classes = useStyles();
  const [baseUnit, setBaseUnit] = React.useState("Euro");
  const [selectedOperation, setSelectedOperation] = React.useState("Add");
  const [textFeildError1, setTextFeildError1] = React.useState(false);
  const [textFeildError2, setTextFeildError2] = React.useState(false);
  const [valueOne, setvalueOne] = React.useState(null);
  const [valueTwo, setvalueTwo] = React.useState(null);
  const [helperTextValue1, setHelperTextValue1] = React.useState("");
  const [helperTextValue2, setHelperTextValue2] = React.useState("");
  const [unit1, setUnit1] = React.useState("Euro");
  const [unit2, setUnit2] = React.useState("Euro");
  const [answer, setAnswer] = React.useState(null);

  // below function controls the cange of base units
  const handleBaseUnitChange = (value) => {
    setAnswer(null);
    setBaseUnit(value);
  };

  // below function controls the arithemetic operational changes
  const handleChangeOperation = (value) => {
    setAnswer(null);
    setSelectedOperation(value);
  };

  // below functions handles the changes for value one textfeild
  const handleConvertValueOneChange = (e) => {
    setTextFeildError1(false);
    setHelperTextValue1("");
    setAnswer(null);
    const { value } = e.target;
    const l = value.length;
    const lc = parseInt(value[l - 1]);
    if (!value) {
      setvalueOne("");
      valueFirst.changeAmount("");
      return;
    }
    if (value[l - 1] === ".") {
      if (!value.slice(0, l - 1).includes(".")) {
        setvalueOne(value);
        valueFirst.changeAmount(value);
        return;
      } else {
        setvalueOne(valueOne);
        valueFirst.changeAmount(valueOne);
        setTextFeildError1(true);
        setHelperTextValue1("Enter Valid Characters");
        return;
      }
    }
    if (!Number.isInteger(lc)) {
      setvalueOne(valueOne);
      valueFirst.changeAmount(valueOne);
      setTextFeildError1(true);
      setHelperTextValue1("Enter Valid Characters");
      return;
    }
    setvalueOne(value);
    valueFirst.changeAmount(valueOne);
  };

  // below function handles the value two textfeild
  const handleConvertValueTwoChange = (e) => {
    setTextFeildError2(false);
    // setvalueTwo(null);
    setHelperTextValue2("");
    setAnswer(null);
    const { value } = e.target;

    const l = value.length;
    const lc = parseInt(value[l - 1]);
    if (!value) {
      setvalueTwo("");
      valueSecond.changeAmount("");
      return;
    }
    if (value[l - 1] === ".") {
      if (!value.slice(0, l - 1).includes(".")) {
        setvalueTwo(value);
        valueSecond.changeAmount(value);
        return;
      } else {
        setvalueOne(valueTwo);
        valueSecond.changeAmount(valueTwo);
        setTextFeildError2(true);
        setHelperTextValue2("Enter Valid Characters");
        return;
      }
    }
    if (!Number.isInteger(lc)) {
      setvalueOne(valueTwo);
      valueSecond.changeAmount(valueTwo);
      setTextFeildError2(true);
      setHelperTextValue2("Enter Valid Characters");
      return;
    }
    setvalueTwo(value);
    valueSecond.changeAmount(value);
  };

  // below function handles the changes for dropdown near textfeild one
  const handleUnitOneChange = (value) => {
    setAnswer(null);
    setUnit1(value);
    valueFirst.changeCurrency(value);
  };

  // below function handles the changes for dropdown near textfeild two
  const handleUnitTwoChange = (value) => {
    setAnswer(null);
    setUnit2(value);
    valueSecond.changeCurrency(value);
  };

  // below function performs arithemetics on calculate button press
  const handleArithemetics = () => {
    if (!valueOne || textFeildError1) {
      setTextFeildError1(true);
      setHelperTextValue1("Enter Value");
      setAnswer("wrong values are used");
      return;
    }
    if (!valueTwo || textFeildError2) {
      setTextFeildError2(true);
      setHelperTextValue2("Enter Value");
      setAnswer("wrong values are used");
      return;
    }
    // console.log(valueFirst.getCurrency());
    const unitOne = unit1.toLowerCase();
    // console.log(valueSecond.getCurrency());
    const unitTwo = unit2.toLowerCase();
    const bUnit = baseUnit.toLowerCase();
    const value1 = parseFloat(valueOne);
    // console.log(valueFirst.getAmount());
    const value2 = parseFloat(valueTwo);
    // console.log(valueSecond.getAmount());
    if (selectedOperation === "Add") {
      const valueOneinBaseUnit = value1 * conversationData[unitOne][bUnit];
      const valueTwoinBaseUnit = value2 * conversationData[unitTwo][bUnit];
      setAnswer(
        `${(valueOneinBaseUnit + valueTwoinBaseUnit).toFixed(2)} ${baseUnit}`
      );
      return;
    }
    if (selectedOperation === "Substract") {
      const valueOneinBaseUnit = value1 * conversationData[unitOne][bUnit];
      const valueTwoinBaseUnit = value2 * conversationData[unitTwo][bUnit];
      const ans = valueOneinBaseUnit - valueTwoinBaseUnit;
      if (ans < 0) {
        setAnswer("Value is less than 0");
        return;
      }
      setAnswer(
        `${(valueOneinBaseUnit - valueTwoinBaseUnit).toFixed(2)} ${baseUnit}`
      );
      return;
    }
    if (selectedOperation === "Multiply") {
      const valueOneinBaseUnit = value1 * conversationData[unitOne][bUnit];
      setAnswer(`${(valueOneinBaseUnit * value2).toFixed(2)} ${baseUnit}`);
      return;
    }
    if (selectedOperation === "Divide") {
      const valueOneinBaseUnit = value1 * conversationData[unitOne][bUnit];
      setAnswer(`${(valueOneinBaseUnit / value2).toFixed(2)} ${baseUnit}`);
      return;
    }
    if (selectedOperation === "Compare") {
      const valueOneinBaseUnit = (
        value1 * conversationData[unitOne][bUnit]
      ).toFixed(2);
      const valueTwoinBaseUnit = (
        value2 * conversationData[unitTwo][bUnit]
      ).toFixed(2);
      if (valueOneinBaseUnit > valueTwoinBaseUnit) {
        setAnswer("Value one is greater than Value two");
      } else if (valueOneinBaseUnit < valueTwoinBaseUnit) {
        setAnswer("Value two is greater than Value one");
      } else {
        setAnswer("Value one is equal to Value two");
      }
      return;
    }
  };

  return (
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
      <BaseUnitComponent
        titleStyle={usedStyles.dropDownTitleStyle}
        titleText="Select Operation"
        selectorLabel="Op. Type"
        selectorValue={selectedOperation}
        availableOptions={availableOperation}
        classes={classes}
        selectorStyleClassName="baseUnitFormControl"
        handleChange={handleChangeOperation}
      />
      <Grid
        container
        xs={12}
        justify="center"
        className={classes.mainContainer}
      >
        <Grid className={classes.valueContainer}>
          <ConversionComponent
            error={textFeildError1}
            textFeildLabel="Enter Value One"
            textFeildValue={valueOne}
            textFeildChangeFunc={handleConvertValueOneChange}
            helperText={helperTextValue1}
            textFeildStyle={{ width: 300 }}
            selectorLabel="Unit"
            selectorValue={unit1}
            availableOptions={availableConvertUnit}
            classes={classes}
            SelectorStyleClassName="convertUnitFormControl"
            selectorChangeFunc={handleUnitOneChange}
          />
        </Grid>
        <Grid className={classes.valueContainer}>
          <ConversionComponent
            error={textFeildError2}
            textFeildLabel="Enter Value Two"
            textFeildValue={valueTwo}
            textFeildChangeFunc={handleConvertValueTwoChange}
            helperText={helperTextValue2}
            textFeildStyle={{ width: 300 }}
            selectorLabel="Unit"
            selectorValue={unit2}
            availableOptions={availableConvertUnit}
            classes={classes}
            SelectorStyleClassName="convertUnitFormControl"
            selectorChangeFunc={handleUnitTwoChange}
            showSelector={!["Multiply", "Divide"].includes(selectedOperation)}
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          justify="center"
          xs={12}
          className={classes.mainContainer}
        >
          <ButtonComponent
            onPress={handleArithemetics}
            buttonStyle={usedStyles.calcButtonStyle}
            label="Calculate"
          />
        </Grid>
      </Grid>
      {answer ? (
        <DisplayComponent
          textStyle={usedStyles.ansDispStyle}
          text={`Result :  ${answer}`}
        />
      ) : (
        <Grid
          container
          justify="center"
          xs={12}
          className={classes.mainContainer}
        />
      )}
    </Grid>
  );
}
