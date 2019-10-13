import React, {
  useState,
  useContext,
  useCallback,
  useLayoutEffect,
  useEffect
} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { graphql, requestSubscription } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import RefreshIcon from "@material-ui/icons/Refresh";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import EmployeesTable from "./EmployeesTable";
import EditEmployeeModal from "./EditEmployeeModal";
import ConfirmModal from "../app/modals/ConfirmModal";
import { RelayContext } from "../app/providers/RelayProvider";
import constants from "../../common/constants";
import { appSelectors } from "../app/state";
import { employeesOperations, employeesSelectors } from "./state";

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
  subscription EmployeesSubscription {
    employeeEvent {
      id
    }
  }
`;

function Employees(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { environment } = useContext(RelayContext);

  const [subTrigger, setSubTrigger] = useState(0);
  const isSubscribed = useSelector(appSelectors.getIsSubscribed);

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

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const pageSize = useSelector(employeesSelectors.getTablePageSize);
  const pageNumber = useSelector(employeesSelectors.getTablePageNumber);
  const params = useSelector(employeesSelectors.getTableParams);
  const selected = useSelector(employeesSelectors.getSelected);
  const isEditModalOpen = useSelector(employeesSelectors.getIsEditModalOpen);

  const setPageSize = useCallback(
    pageSize => dispatch(employeesOperations.setTablePageSize({ pageSize })),
    []
  );

  const setPageNumber = useCallback(
    pageNumber =>
      dispatch(employeesOperations.setTablePageNumber({ pageNumber })),
    []
  );

  const setParams = useCallback(
    params => dispatch(employeesOperations.setTableParams({ params })),
    []
  );

  const refresh = useCallback(() => {
    if (props.retry) props.retry();
  }, [props.retry]);

  const create = useCallback(
    () => dispatch(employeesOperations.showEditModal()),
    []
  );

  const edit = useCallback(
    () => dispatch(employeesOperations.editFirstSelected()),
    []
  );

  const askToRemove = useCallback(() => {
    setIsConfirmOpen(true);
  }, []);

  const cancelRemove = useCallback(() => {
    setIsConfirmOpen(false);
  }, []);

  const remove = useCallback(() => {
    setIsConfirmOpen(false);
    return Promise.all(
      selected.map(employeeId =>
        dispatch(employeesOperations.remove({ id: employeeId }))
      )
    );
  }, [selected]);

  const changeSort = useCallback(
    sortBy => {
      let sortDir = "asc";
      if (params.sortBy === sortBy)
        sortDir = params.sortDir === "asc" ? "desc" : "asc";
      setPageNumber(0);
      setParams({
        sortBy,
        sortDir,
        first: pageSize,
        after: null,
        last: null,
        before: null
      });
    },
    [params.sortBy, params.sortDir, pageSize]
  );

  const changeRowsPerPage = useCallback(
    evt => {
      const newPageSize = evt.target.value;
      setPageSize(newPageSize);
      setPageNumber(0);
      setParams({
        sortBy: params.sortBy,
        sortDir: params.sortDir,
        first: newPageSize,
        after: null,
        last: null,
        before: null
      });
    },
    [params.sortBy, params.sortDir]
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
      totalCount,
      pageSize,
      params.sortBy,
      params.sortDir,
      startCursor,
      endCursor
    ]
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
    [subTrigger, refresh]
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
    [isSubscribed, refresh]
  );

  useIsomorphicLayoutEffect(
    // check if we fell off the list
    () => {
      if (totalCount && pageNumber * pageSize >= totalCount) {
        setPageNumber(0);
        setParams({
          sortBy: params.sortBy,
          sortDir: params.sortDir,
          first: pageSize,
          after: null,
          last: null,
          before: null
        });
      }
    },
    [pageNumber, pageSize, totalCount]
  );

  useIsomorphicLayoutEffect(
    // deselect rows that are not on the current page
    () => {
      dispatch(
        employeesOperations.deselectAll({
          exceptEmployeeIds: employees.map(item => item.node.id)
        })
      );
    },
    [employees]
  );

  return (
    <React.Fragment>
      <div className={classes.message}>
        <Typography variant="h6" className={classes.messageTitle}>
          <FormattedMessage id="EMPLOYEES_MESSAGE_TITLE" />
        </Typography>
        <Typography variant="body1" className={classes.messageContent}>
          <FormattedMessage id="EMPLOYEES_MESSAGE_CONTENT" />
        </Typography>
      </div>

      <div className={classes.layout}>
        <div className={classes.header}>
          <Typography variant="h3" color="inherit">
            <FormattedMessage id="TITLE_TABLES" />
          </Typography>
          <IconButton
            color="inherit"
            onClick={refresh}
            disabled={!isSubscribed}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: classes.button }}
            onClick={create}
            disabled={!isSubscribed}
          >
            <FormattedMessage id="EMPLOYEES_CREATE_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button }}
            onClick={edit}
            disabled={!isSubscribed || !selected.length}
          >
            <FormattedMessage id="EMPLOYEES_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button }}
            onClick={askToRemove}
            disabled={!isSubscribed || !selected.length}
          >
            <FormattedMessage id="EMPLOYEES_DELETE_BUTTON" />
          </Button>
        </div>

        <Paper className={classes.paper}>
          <EmployeesTable
            selectors={employeesSelectors}
            operations={employeesOperations}
            employees={employees}
            selected={selected}
            sortBy={params.sortBy}
            sortDir={params.sortDir}
            onSort={changeSort}
            isDisabled={!isSubscribed}
          />

          <TablePagination
            rowsPerPageOptions={[10, 20, 30, 50, 100]}
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

        {isEditModalOpen && <EditEmployeeModal />}

        {isConfirmOpen && (
          <ConfirmModal
            title="DELETE_EMPLOYEE_TITLE"
            text="DELETE_EMPLOYEE_TEXT"
            cancel="DELETE_EMPLOYEE_CANCEL"
            submit="DELETE_EMPLOYEE_SUBMIT"
            onCancel={cancelRemove}
            onSubmit={remove}
          />
        )}
      </div>
    </React.Fragment>
  );
}

Employees.propTypes = {
  viewer: PropTypes.object,
  retry: PropTypes.func
};

export default Employees;
