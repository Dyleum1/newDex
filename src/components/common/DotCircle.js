import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circle: {
    color: '#a3c1ff',
    // color: "#C80C81",
    fontSize: 20,
  },
}));
const DotCircle = () => {
  const classes = useStyles();

  return <font className={classes.circle}>.</font>;
};

export default React.memo(DotCircle);
