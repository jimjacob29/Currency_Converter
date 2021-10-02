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
import { useStyles } from "./style";

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

  const handleBaseUnitChange = (value) => {
    setAnswer(null);
    setBaseUnit(value);
  };
  const handleChangeOperation = (value) => {
    setAnswer(null);
    setSelectedOperation(value);
  };
  const handleConvertValueOneChange = (e) => {
    setTextFeildError1(false);
    setvalueOne(null);
    setHelperTextValue1("");
    setAnswer(null);
    const { value } = e.target;
    const reg = new RegExp("^[0-9]+$");
    if (!reg.test(value)) {
      if (!value) {
        setvalueOne("");
        return;
      }
      setTextFeildError1(true);
      setHelperTextValue1("Enter Valid Characters");
      return;
    }
    setvalueOne(value.replace(/[^0-9]/g, ""));
  };
  const handleConvertValueTwoChange = (e) => {
    setTextFeildError2(false);
    setvalueTwo(null);
    setHelperTextValue2("");
    setAnswer(null);
    const { value } = e.target;
    const reg = new RegExp("^[0-9]+$");
    if (!reg.test(value)) {
      if (!value) {
        setvalueTwo("");
        return;
      }
      setTextFeildError2(true);
      setHelperTextValue2("Enter Valid Characters");
      return;
    }
    setvalueTwo(value.replace(/[^0-9]/g, ""));
  };
  const handleUnitOneChange = (value) => {
    setAnswer(null);
    setUnit1(value);
  };
  const handleUnitTwoChange = (value) => {
    setAnswer(null);
    setUnit2(value);
  };
  const handleArithemetics = () => {
    if (!valueOne) {
      setTextFeildError1(true);
      setHelperTextValue1("Enter Value");
      return;
    }
    if (!valueTwo) {
      setTextFeildError2(true);
      setHelperTextValue2("Enter Value");
      return;
    }
    const unitOne = unit1.toLowerCase();
    const unitTwo = unit2.toLowerCase();
    const bUnit = baseUnit.toLowerCase();
    const value1 = parseFloat(valueOne);
    const value2 = parseFloat(valueTwo);
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
      <BaseUnitComponent
        titleStyle={{
          fontSize: 20,
          fontWeight: 300,
          letterSpacing: 2,
          lineHeight: 2,
          color: "#000000"
        }}
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
        style={{ marginTop: 50, flexBasis: 0 }}
      >
        <Grid style={{ marginLeft: 50, marginRight: 100 }}>
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
        <Grid style={{ marginLeft: 50, marginRight: 100 }}>
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
          style={{ marginTop: 30, flexBasis: 0 }}
        >
          <ButtonComponent
            onPress={handleArithemetics}
            buttonStyle={{
              color: "white",
              backgroundColor: "blue",
              fontSize: 20,
              fontWeight: 600
            }}
            label="Calculate"
          />
        </Grid>
      </Grid>
      {answer ? (
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
          text={`Result :  ${answer}`}
        />
      ) : (
        <Grid
          container
          justify="center"
          xs={12}
          style={{ marginTop: 50, flexBasis: 0 }}
        />
      )}
    </Grid>
  );
}
