import React, {
  useState,
  useContext,
  useLayoutEffect,
  useEffect,
  useCallback
} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { AutoSizer } from "react-virtualized";
import { useIntl } from "react-intl";
import { graphql, requestSubscription } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TablePagination from "@material-ui/core/TablePagination";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import EmployeesTable from "../../employees/EmployeesTable";
import { RelayContext } from "../../app/providers/RelayProvider";
import constants from "../../../common/constants";
import { appSelectors } from "../../app/state";
import { dashboardOperations, dashboardSelectors } from "../state";

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

const useStyles = makeStyles(theme => ({
  message: {
    background: lighten(theme.palette.background.paper, 0.1),
    width: "100%",
    marginTop: "-2rem",
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  messageTitle: {
    fontSize: 26,
    margin: "3rem 3rem 1rem 3rem"
  },
  messageContent: {
    flex: 1,
    maxWidth: "600px",
    margin: "3rem 1rem 1rem 1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  },
  paper: {
    background: theme.main.paper
  },
  header: {
    marginTop: "3rem",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between"
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  button: {
    margin: "0.5rem"
  }
}));

const subscription = graphql`
  subscription DeptEmployeesSubscription {
    employeeEvent {
      id
    }
  }
`;

const depts = Object.values(constants.depts);

function DeptEmployees(props) {
  const intl = useIntl();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { environment } = useContext(RelayContext);

  const [subTrigger, setSubTrigger] = useState(0);
  const isSubscribed = useSelector(state => appSelectors.isSubscribed(state));

  const [employees, setEmployees] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);

  useEffect(() => {
    const newEmployees = ((props.viewer || {}).employees || {}).edges;
    if (typeof newEmployees !== "undefined") setEmployees(newEmployees);

    const newTotalCount = ((props.viewer || {}).employees || {}).totalCount;
    if (typeof newTotalCount !== "undefined") setTotalCount(newTotalCount);

    const newStartCursor = (
      ((props.viewer || {}).employees || {}).pageInfo || {}
    ).startCursor;
    if (typeof newStartCursor !== "undefined") setStartCursor(newStartCursor);

    const endCursor = (((props.viewer || {}).employees || {}).pageInfo || {})
      .endCursor;
    if (typeof endCursor !== "undefined") setEndCursor(endCursor);
  }, [props.viewer]);

  const pageSize = useSelector(state =>
    dashboardSelectors.getTablePageSize(state)
  );
  const pageNumber = useSelector(state =>
    dashboardSelectors.getTablePageNumber(state)
  );
  const params = useSelector(state => dashboardSelectors.getTableParams(state));
  const dept = useSelector(state => dashboardSelectors.getDept(state));

  const setPageSize = useCallback(
    pageSize => dispatch(dashboardOperations.setTablePageSize({ pageSize })),
    []
  );

  const setPageNumber = useCallback(
    pageNumber =>
      dispatch(dashboardOperations.setTablePageNumber({ pageNumber })),
    []
  );

  const setParams = useCallback(
    params => dispatch(dashboardOperations.setTableParams({ params })),
    []
  );

  const refresh = useCallback(() => {
    if (props.retry) props.retry();
  }, [props.retry]);

  const changeSort = useCallback(
    sortBy => {
      let sortDir = "asc";
      if (params.sortBy === sortBy)
        sortDir = params.sortDir === "asc" ? "desc" : "asc";
      setPageNumber(0);
      setParams({
        dept,
        sortBy,
        sortDir,
        first: pageSize,
        after: null,
        last: null,
        before: null
      });
    },
    [params.sortBy, params.sortDir, dept, pageSize]
  );

  const changeRowsPerPage = useCallback(
    evt => {
      const newPageSize = evt.target.value;
      setPageSize(newPageSize);
      setPageNumber(0);
      setParams({
        dept,
        sortBy: params.sortBy,
        sortDir: params.sortDir,
        first: newPageSize,
        after: null,
        last: null,
        before: null
      });
    },
    [params.sortBy, params.sortDir, dept]
  );

  const changePage = useCallback(
    (evt, newPageNumber) => {
      if (
        newPageNumber >= Math.ceil(totalCount / pageSize) ||
        newPageNumber < 0
      ) {
        return;
      }

      const newParams = {
        dept,
        sortBy: params.sortBy,
        sortDir: params.sortDir,
        first: null,
        after: null,
        last: null,
        before: null
      };

      if (newPageNumber === 0) {
        newParams.first = pageSize;
      } else if (newPageNumber > pageNumber) {
        newParams.first = pageSize;
        newParams.after = endCursor;
      } else if (newPageNumber < pageNumber) {
        newParams.last = pageSize;
        newParams.before = startCursor;
      }

      setPageNumber(newPageNumber);
      setParams(newParams);
    },
    [
      dept,
      totalCount,
      pageSize,
      params.sortBy,
      params.sortDir,
      startCursor,
      endCursor
    ]
  );

  const changeDept = useCallback(
    (evt, index) => {
      const newDept = depts[index];
      setPageNumber(0);
      setParams({
        dept: newDept,
        sortBy: params.sortBy,
        sortDir: params.sortDir,
        first: pageSize,
        after: null,
        last: null,
        before: null
      });
    },
    [params.sortBy, params.sortDir, pageSize]
  );

  useEffect(
    // subscribe and refresh the page on any subscription event
    // changing subTrigger state variable will force resubscribing
    () => {
      let isDetroyed = false;

      const request = requestSubscription(environment, {
        subscription,
        onNext: refresh,
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

  useEffect(
    // refresh on resubscribing
    () => {
      if (!isSubscribed) return;

      let isDestroyed = false;

      let timer = setTimeout(() => {
        timer = null;
        if (!isDestroyed) refresh();
      }, 1000);

      return () => {
        isDestroyed = true;

        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      };
    },
    [isSubscribed]
  );

  useIsomorphicLayoutEffect(
    // check if we fell off the list
    () => {
      if (totalCount && pageNumber * pageSize >= totalCount) {
        setPageNumber(0);
        setParams({
          dept,
          sortBy: params.sortBy,
          sortDir: params.sortDir,
          first: pageSize,
          after: null,
          last: null,
          before: null
        });
      }
    },
    [pageNumber, pageSize, totalCount, dept, params]
  );

  const renderTable = useCallback(
    ({ width }) => (
      <Paper style={{ width }} className={classes.paper}>
        <AppBar position="static">
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={depts.indexOf(dept)}
            onChange={changeDept}
          >
            {depts.map(dept => (
              <Tab
                key={`tab-${dept}`}
                label={intl.formatMessage({ id: `DEPT_${dept}` })}
                disabled={!isSubscribed}
              />
            ))}
          </Tabs>
        </AppBar>

        <EmployeesTable
          dept={dept}
          selectors={dashboardSelectors}
          operations={dashboardOperations}
          hideSelect
          hideDept
          employees={employees}
          sortBy={params.sortBy}
          sortDir={params.sortDir}
          onSort={changeSort}
          isDisabled={!isSubscribed}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          component="div"
          count={totalCount}
          rowsPerPage={pageSize}
          labelRowsPerPage=""
          page={pageNumber}
          onChangeRowsPerPage={changeRowsPerPage}
          onChangePage={changePage}
          nextIconButtonProps={{ disabled: !isSubscribed }}
          backIconButtonProps={{ disabled: !isSubscribed }}
          SelectProps={{ disabled: !isSubscribed }}
        />
      </Paper>
    ),
    [
      classes,
      isSubscribed,
      dept,
      employees,
      totalCount,
      pageSize,
      pageNumber,
      params.sortBy,
      params.sortDir
    ]
  );

  return <AutoSizer disableHeight>{renderTable}</AutoSizer>;
}

DeptEmployees.propTypes = {
  viewer: PropTypes.object,
  retry: PropTypes.func
};

export default DeptEmployees;
