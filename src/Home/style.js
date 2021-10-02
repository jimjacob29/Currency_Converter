import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundImage:
      "linear-gradient( 180.5deg,  rgba(46,255,171,1) 12.3%, rgba(252,251,222,0.46) 92% )",
    display: "flex",
    flexDirection: "column"
  },
  titleContainer: {
    fontSize: 60,
    fontWeight: 700,
    letterSpacing: 2,
    lineHeight: 2,
    color: "green"
  },
  tabContainer: {
    flexBasis: 0,
    marginLeft: 10,
    marginRight: 10
  },
  tabs: {
    backgroundColor: "#1aff66",
    height: 60,
    fontWeight: 700
  }
}));
