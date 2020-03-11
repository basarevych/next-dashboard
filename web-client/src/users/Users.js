import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect
} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import RefreshIcon from "@material-ui/icons/Refresh";
import UsersTable from "./UsersTable";
import EditUserModal from "./EditUserModal";
import ConfirmModal from "../app/modals/ConfirmModal";
import { appSelectors } from "../app/state";
import { usersOperations, usersSelectors } from "./state";
import useSubscription from "../app/lib/useSubscription";

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
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
  subscription UsersSubscription {
    userEvent {
      id
    }
  }
`;

function Users(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isSubscribed = useSelector(appSelectors.getIsSubscribed);

  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [startCursor, setStartCursor] = useState(null);
  const [endCursor, setEndCursor] = useState(null);

  useEffect(() => {
    const newUsers = ((props.viewer || {}).users || {}).edges;
    if (typeof newUsers !== "undefined") setUsers(newUsers);

    const newTotalCount = ((props.viewer || {}).users || {}).totalCount;
    if (typeof newTotalCount !== "undefined") setTotalCount(newTotalCount);

    const newStartCursor = (((props.viewer || {}).users || {}).pageInfo || {})
      .startCursor;
    if (typeof newStartCursor !== "undefined") setStartCursor(newStartCursor);

    const endCursor = (((props.viewer || {}).users || {}).pageInfo || {})
      .endCursor;
    if (typeof endCursor !== "undefined") setEndCursor(endCursor);
  }, [props.viewer]);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const pageSize = useSelector(usersSelectors.getTablePageSize);
  const pageNumber = useSelector(usersSelectors.getTablePageNumber);
  const params = useSelector(usersSelectors.getTableParams);
  const selected = useSelector(usersSelectors.getSelected);
  const isEditModalOpen = useSelector(usersSelectors.getIsEditModalOpen);

  const setPageSize = useCallback(
    pageSize => dispatch(usersOperations.setTablePageSize({ pageSize })),
    []
  );

  const setPageNumber = useCallback(
    pageNumber => dispatch(usersOperations.setTablePageNumber({ pageNumber })),
    []
  );

  const setParams = useCallback(
    params => dispatch(usersOperations.setTableParams({ params })),
    []
  );

  const refresh = useCallback(() => {
    if (props.retry) props.retry();
  }, [props.retry]);

  const create = useCallback(
    () => dispatch(usersOperations.showEditModal()),
    []
  );

  const edit = useCallback(
    () => dispatch(usersOperations.editFirstSelected()),
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
      selected.map(userId => dispatch(usersOperations.remove({ id: userId })))
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

  useSubscription(
    // subscribe and refresh the page on any subscription event
    {
      subscription,
      onNext: refresh
    }
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
        usersOperations.deselectAll({
          exceptUserIds: users.map(item => item.node.id)
        })
      );
    },
    [users]
  );

  useIsomorphicLayoutEffect(
    // refresh when params has changed
    () => {
      refresh();
    },
    [params]
  );

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <div className={classes.header}>
          <Typography variant="h3" color="inherit">
            <FormattedMessage id="TITLE_USERS" />
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
            <FormattedMessage id="USERS_CREATE_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button }}
            onClick={edit}
            disabled={!isSubscribed || !selected.length}
          >
            <FormattedMessage id="USERS_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button }}
            onClick={askToRemove}
            disabled={!isSubscribed || !selected.length}
          >
            <FormattedMessage id="USERS_DELETE_BUTTON" />
          </Button>
        </div>

        <Paper>
          <UsersTable
            users={users}
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

        {isEditModalOpen && <EditUserModal />}

        {isConfirmOpen && (
          <ConfirmModal
            title="DELETE_USER_TITLE"
            text="DELETE_USER_TEXT"
            cancel="DELETE_USER_CANCEL"
            submit="DELETE_USER_SUBMIT"
            onCancel={cancelRemove}
            onSubmit={remove}
          />
        )}
      </div>
    </React.Fragment>
  );
}

Users.propTypes = {
  viewer: PropTypes.object,
  retry: PropTypes.func
};

export default Users;
