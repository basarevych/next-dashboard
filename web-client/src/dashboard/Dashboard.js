import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { AutoSizer } from "react-virtualized";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useSubscription from "../app/lib/useSubscription";
import VisitorsStat from "./stat/VisitorsStatContainer";
import LoadStat from "./stat/LoadStatContainer";
import MemoryStat from "./stat/MemoryStatContainer";
import OperationsStat from "./stat/OperationsStatContainer";
import AvgTimeStat from "./stat/AvgTimeStatContainer";
import SalesMap from "./sales/SalesMap";
import StateSalesQuery from "./sales/StateSalesQuery";
import DeptEmployeesQuery from "./employees/DeptEmployeesQuery";
import { appOperations, appSelectors } from "../app/state";
import { dashboardOperations, dashboardSelectors } from "./state";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  }
}));

const subscription = graphql`
  subscription DashboardSubscription {
    dashboardEvent {
      visitors {
        node {
          date
          value: visitors
        }
      }
      load {
        node {
          date
          value: load
        }
      }
      memory {
        node {
          date
          value: memory
        }
      }
      operations {
        node {
          date
          value: operations
        }
      }
      avgTime {
        node {
          date
          value: avgTime
        }
      }
    }
  }
`;

function Dashboard(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [usStates, setUsStates] = useState(null);
  const [usCities, setUsCities] = useState(null);

  const isAnimated = useSelector(dashboardSelectors.getIsAnimated);
  const isStarted = useSelector(appSelectors.getIsStarted);

  const toggleIsAnimated = useCallback(
    () =>
      dispatch(dashboardOperations.setIsAnimated({ isAnimated: !isAnimated })),
    [isAnimated]
  );

  useEffect(
    // load states
    () => {
      if (!isStarted) return;

      (async () => {
        const response = await dispatch(appOperations.fetchUsStates());
        if (response.status === 200) {
          const usStates = await response.json();
          setUsStates(usStates);
        }
      })();
    },
    [isStarted]
  );

  useEffect(
    // load cities
    () => {
      if (!isStarted) return;

      (async () => {
        const response = await dispatch(appOperations.fetchUsCities());
        if (response.status === 200) {
          const usCities = await response.json();
          setUsCities(usCities);
        }
      })();
    },
    [isStarted]
  );

  useSubscription(
    // subscribe and listen to subscription events
    {
      subscription,
      updater: store => {
        const viewer = store.getRoot().getLinkedRecord("viewer");
        if (!viewer) return;

        const rootField = store.getRootField("dashboardEvent");
        if (!rootField) return;

        const newVisitors = rootField.getLinkedRecord("visitors");
        const visitors = viewer.getLinkedRecord("visitorsValues");
        if (visitors && newVisitors) {
          const edges = visitors.getLinkedRecords("edges");
          while (edges.length >= 10) edges.shift();
          visitors.setLinkedRecords([...edges, newVisitors], "edges");
        }

        const newLoad = rootField.getLinkedRecord("load");
        const load = viewer.getLinkedRecord("loadValues");
        if (load && newLoad) {
          const edges = load.getLinkedRecords("edges");
          while (edges.length >= 10) edges.shift();
          load.setLinkedRecords([...edges, newLoad], "edges");
        }

        const newMemory = rootField.getLinkedRecord("memory");
        const memory = viewer.getLinkedRecord("memoryValues");
        if (memory && newMemory) {
          const edges = memory.getLinkedRecords("edges");
          while (edges.length >= 10) edges.shift();
          memory.setLinkedRecords([...edges, newMemory], "edges");
        }

        const newOperations = rootField.getLinkedRecord("operations");
        const operations = viewer.getLinkedRecord("operationsValues");
        if (operations && newOperations) {
          const edges = operations.getLinkedRecords("edges");
          while (edges.length >= 10) edges.shift();
          operations.setLinkedRecords([...edges, newOperations], "edges");
        }

        const newAvgTime = rootField.getLinkedRecord("avgTime");
        const avgTime = viewer.getLinkedRecord("avgTimeValues");
        if (avgTime && newAvgTime) {
          const edges = avgTime.getLinkedRecords("edges");
          while (edges.length >= 10) edges.shift();
          avgTime.setLinkedRecords([...edges, newAvgTime], "edges");
        }
      }
    }
  );

  const renderVisitors = useCallback(
    ({ width }) => {
      return (
        <VisitorsStat
          width={width}
          id="visitors"
          label="DASHBOARD_VISITORS_LABEL"
          data={(props.viewer || {}).visitorsValues || null}
          isAnimated={isAnimated}
        />
      );
    },
    [props.viewer, isAnimated]
  );

  const renderLoad = useCallback(
    ({ width }) => (
      <LoadStat
        width={width}
        id="load"
        label="DASHBOARD_LOAD_LABEL"
        data={(props.viewer || {}).loadValues || null}
        percent
        precision={1}
        isAnimated={isAnimated}
      />
    ),
    [props.viewer, isAnimated]
  );

  const renderMemory = useCallback(
    ({ width }) => (
      <MemoryStat
        width={width}
        id="memory"
        label="DASHBOARD_MEMORY_LABEL"
        data={(props.viewer || {}).memoryValues || null}
        percent
        precision={1}
        isAnimated={isAnimated}
      />
    ),
    [props.viewer, isAnimated]
  );

  const renderOperations = useCallback(
    ({ width }) => (
      <OperationsStat
        width={width}
        id="operations"
        label="DASHBOARD_OPERATIONS_LABEL"
        data={(props.viewer || {}).operationsValues || null}
        isAnimated={isAnimated}
      />
    ),
    [props.viewer, isAnimated]
  );

  const renderAvgTime = useCallback(
    ({ width }) => (
      <AvgTimeStat
        width={width}
        id="avgTime"
        label="DASHBOARD_AVG_TIME_LABEL"
        data={(props.viewer || {}).avgTimeValues || null}
        precision={2}
        isAnimated={isAnimated}
      />
    ),
    [props.viewer, isAnimated]
  );

  return (
    <div className={classes.layout}>
      <Grid container spacing={2} justify="center">
        <Grid
          container
          spacing={2}
          item
          alignContent="flex-start"
          justify="center"
          xs={12}
          lg={2}
        >
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={toggleIsAnimated}
            >
              <FormattedMessage
                id={
                  isAnimated
                    ? "DASHBOARD_DISABLE_ANIMATIONS"
                    : "DASHBOARD_ENABLE_ANIMATIONS"
                }
              />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AutoSizer disableHeight>{renderVisitors}</AutoSizer>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AutoSizer disableHeight>{renderLoad}</AutoSizer>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AutoSizer disableHeight>{renderMemory}</AutoSizer>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AutoSizer disableHeight>{renderOperations}</AutoSizer>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <AutoSizer disableHeight>{renderAvgTime}</AutoSizer>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="stretch" item xs={12} lg={10}>
          <Grid item xs={12} md={8}>
            <SalesMap
              states={usStates}
              data={usCities}
              isAnimated={isAnimated}
            />
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
