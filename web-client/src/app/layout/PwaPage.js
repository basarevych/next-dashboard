import React from "react";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "./Sidebar";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "center"
  }
}));

function PwaPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar pwa onMenuClick={_.noop} />
    </div>
  );
}

export default PwaPage;
