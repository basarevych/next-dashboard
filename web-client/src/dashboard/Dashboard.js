import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ConnectionHandler } from "relay-runtime";
import { graphql, requestSubscription } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { RelayContext } from "../app/providers/RelayProvider";
import VisitorsStat from "./stat/VisitorsStatContainer";
import LoadStat from "./stat/LoadStatContainer";
import MemoryStat from "./stat/MemoryStatContainer";
import OperationsStat from "./stat/OperationsStatContainer";
import AvgTimeStat from "./stat/AvgTimeStatContainer";
import SalesMap from "./sales/SalesMap";
import StateSalesQuery from "./sales/StateSalesQuery";
import DeptEmployeesQuery from "./employees/DeptEmployeesQuery";
import { appOperations, appSelectors } from "../app/state";
import constants from "../../common/constants";

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
  const { environment } = useContext(RelayContext);

  const [subTrigger, setSubTrigger] = useState(0);

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

  useEffect(
    // subscribe and listen to subscription events
    // changing subTrigger state variable will force resubscribing
    () => {
      let isDetroyed = false;

      const request = requestSubscription(environment, {
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
            edges.shift();
            visitors.setLinkedRecords([...edges, newVisitors], "edges");
          }

          const newLoad = rootField.getLinkedRecord("load");
          const load = viewer.getLinkedRecord("loadValues");
          if (load && newLoad) {
            const edges = load.getLinkedRecords("edges");
            edges.shift();
            load.setLinkedRecords([...edges, newLoad], "edges");
          }

          const newMemory = rootField.getLinkedRecord("memory");
          const memory = viewer.getLinkedRecord("memoryValues");
          if (memory && newMemory) {
            const edges = memory.getLinkedRecords("edges");
            edges.shift();
            memory.setLinkedRecords([...edges, newMemory], "edges");
          }

          const newOperations = rootField.getLinkedRecord("operations");
          const operations = viewer.getLinkedRecord("operationsValues");
          if (operations && newOperations) {
            const edges = operations.getLinkedRecords("edges");
            edges.shift();
            operations.setLinkedRecords([...edges, newOperations], "edges");
          }

          const newAvgTime = rootField.getLinkedRecord("avgTime");
          const avgTime = viewer.getLinkedRecord("avgTimeValues");
          if (avgTime && newAvgTime) {
            const edges = avgTime.getLinkedRecords("edges");
            edges.shift();
            avgTime.setLinkedRecords([...edges, newAvgTime], "edges");
          }
        },
        onCompleted: () =>
          setTimeout(() => {
            if (!isDetroyed) setSubTrigger(n => n + 1);
          }, 1000),
        onError: () =>
          setTimeout(() => {
            if (!isDetroyed) setSubTrigger(n => n + 1);
          }, 1000)
      });

      const handleIdentityChange = () => {
        if (!isDetroyed) setSubTrigger(n => n + 1);
      };

      // reconnect after logging in
      window.addEventListener(
        constants.events.IDENTITY_CHANGED,
        handleIdentityChange
      );

      return () => {
        isDetroyed = true;
        request.dispose();
        window.removeEventListener(
          constants.events.IDENTITY_CHANGED,
          handleIdentityChange
        );
      };
    },
    [subTrigger]
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
            <VisitorsStat
              label="DASHBOARD_VISITORS_LABEL"
              data={(props.viewer || {}).visitorsValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <LoadStat
              label="DASHBOARD_LOAD_LABEL"
              percent
              precision={1}
              data={(props.viewer || {}).loadValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <MemoryStat
              label="DASHBOARD_MEMORY_LABEL"
              percent
              precision={1}
              data={(props.viewer || {}).memoryValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <OperationsStat
              label="DASHBOARD_OPERATIONS_LABEL"
              data={(props.viewer || {}).operationsValues}
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
