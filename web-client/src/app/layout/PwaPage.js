import React, { useCallback } from "react";
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

  const noop = useCallback(() => {}, []);

  return (
    <div className={classes.root}>
      <Sidebar pwa onMenuClick={noop} />
    </div>
  );
}

export default PwaPage;
