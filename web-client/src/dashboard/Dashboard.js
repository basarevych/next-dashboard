import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ProfitStat from "./stat/ProfitStatContainer";
import SalesStat from "./stat/SalesStatContainer";
import ClientsStat from "./stat/ClientsStatContainer";
import AvgTimeStat from "./stat/AvgTimeStatContainer";
import SalesMap from "./sales/SalesMap";
import StateSales from "./sales/StateSalesContainer";
import DeptEmployees from "./employees/DeptEmployeesContainer";
import { appOperations, appSelectors } from "../app/state";
import { dashboardSelectors, dashboardOperations } from "./state";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  }
}));

function Dashboard(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [usCities, setUsCities] = useState(null);

  const isStarted = useSelector(state => appSelectors.isStarted(state));

  const state = useSelector(state => dashboardSelectors.getState(state));
  const setState = state => dispatch(dashboardOperations.setState({ state }));

  const handleStateSelected = useCallback(
    newState => {
      if (state !== newState) setState(newState);
    },
    [state, setState]
  );

  useEffect(() => {
    if (!isStarted) return;

    let isDestroyed = false;
    let iddle = requestIdleCallback(async () => {
      iddle = null;
      if (isDestroyed) return;
      const response = await dispatch(appOperations.fetchCities());
      if (isDestroyed) return;
      if (response.status === 200) {
        iddle = requestIdleCallback(async () => {
          iddle = null;
          if (isDestroyed) return;
          const usCities = await response.json();
          if (!isDestroyed) setUsCities(usCities);
        });
      }
    });

    return () => {
      isDestroyed = true;
      if (iddle) {
        cancelIdleCallback(iddle);
        iddle = null;
      }
    };
  }, [isStarted]);

  return (
    <div className={classes.layout}>
      <Grid container spacing={2} justify="center">
        <Grid
          container
          spacing={2}
          item
          alignContent="space-around"
          xs={12}
          lg={2}
        >
          <Grid item xs={12} sm={6} lg={12}>
            <ProfitStat
              label="DASHBOARD_PROFIT_LABEL"
              data={(props.viewer || {}).profitValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <SalesStat
              label="DASHBOARD_SALES_LABEL"
              data={(props.viewer || {}).salesValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <ClientsStat
              label="DASHBOARD_CLIENTS_LABEL"
              data={(props.viewer || {}).clientsValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AvgTimeStat
              label="DASHBOARD_AVG_TIME_LABEL"
              precision={2}
              data={(props.viewer || {}).avgTimeValues}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="stretch" item xs={12} lg={10}>
          <Grid item xs={12} md={8}>
            <SalesMap data={usCities} onSelect={handleStateSelected} />
          </Grid>
          <Grid item xs={12} md={4}>
            <StateSales viewer={props.viewer} selected={state} />
          </Grid>
          <Grid item xs={12}>
            <DeptEmployees viewer={props.viewer} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  viewer: PropTypes.object.isRequired
};

export default Dashboard;
