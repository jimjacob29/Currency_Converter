import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 4,
    minWidth: 120
  },
  baseUnitFormControl: {
    margin: 4,
    minWidth: 120,
    width: 200
  },
  convertUnitFormControl: {
    margin: 4,
    minWidth: 120,
    marginLeft: 50
  },
  selectEmpty: {
    marginTop: 4
  },
  mainContainer: {
    marginTop: 50,
    flexBasis: 0
  }
}));

export const usedStyles = {
  dropDownTitleStyle: {
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: 2,
    lineHeight: 2,
    color: "#000000"
  },
  convButtonStyle: {
    color: "white",
    backgroundColor: "blue",
    fontSize: 20,
    fontWeight: 600
  },
  ansDispStyle: {
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: 2,
    lineHeight: 2,
    color: "red",
    backgroundImage:
      "radial-gradient( circle 780.6px at 10% 20%,  rgba(133,255,189,1) 0%, rgba(255,251,125,1) 90.7% )",
    width: "50%"
  }
};
