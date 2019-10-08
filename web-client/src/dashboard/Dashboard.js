import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ProfitStat from "./stat/ProfitStatContainer";
import SalesStat from "./stat/SalesStatContainer";
import ClientsStat from "./stat/ClientsStatContainer";
import AvgTimeStat from "./stat/AvgTimeStatContainer";
import SalesMap from "./sales/SalesMap";
import StateSalesQuery from "./sales/StateSalesQuery";
import DeptEmployeesQuery from "./employees/DeptEmployeesQuery";
import { appOperations, appSelectors } from "../app/state";

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

  const [usStates, setUsStates] = useState(null);
  const [usCities, setUsCities] = useState(null);

  const isStarted = useSelector(appSelectors.isStarted);

  useEffect(
    // load states
    () => {
      if (!isStarted) return;

      let isDestroyed = false;
      let iddle = requestIdleCallback(async () => {
        iddle = null;
        if (isDestroyed) return;
        const response = await dispatch(appOperations.fetchUsStates());
        if (isDestroyed) return;
        if (response.status === 200) {
          iddle = requestIdleCallback(async () => {
            iddle = null;
            if (isDestroyed) return;
            const usStates = await response.json();
            if (!isDestroyed) setUsStates(usStates);
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
    },
    [isStarted]
  );

  useEffect(
    // load cities
    () => {
      if (!isStarted) return;

      let isDestroyed = false;
      let iddle = requestIdleCallback(async () => {
        iddle = null;
        if (isDestroyed) return;
        const response = await dispatch(appOperations.fetchUsCities());
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
    },
    [isStarted]
  );

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
            <SalesMap states={usStates} data={usCities} />
          </Grid>
          <Grid item xs={12} md={4}>
            <StateSalesQuery />
          </Grid>
          <Grid item xs={12}>
            <DeptEmployeesQuery />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  viewer: PropTypes.object,
  retry: PropTypes.func
};

export default Dashboard;
