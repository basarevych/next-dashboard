import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { usersOperations } from "./state";

const useStyles = makeStyles({
  checkboxField: {
    width: 1,
    whiteSpace: "pre"
  },
  checkbox: {
    padding: 0
  }
});

function UsersHeader(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const userIds = useMemo(() => props.users.map(item => item.node.id), [
    props.users
  ]);
  const hasRecords = useMemo(() => props.users.length > 0, [props.users]);
  const isAllSelected = useMemo(
    () => !userIds.filter(item => !props.selected.includes(item)).length,
    [userIds, props.selected]
  );
  const isAllDeselected = useMemo(() => !props.selected.length, [
    props.selected
  ]);

  const toggleAll = useCallback(() => {
    if (isAllSelected) dispatch(usersOperations.deselectAll());
    else dispatch(usersOperations.selectAll({ userIds }));
  }, [userIds, isAllSelected]);

  return (
    <TableRow>
      <TableCell padding="checkbox" classes={{ root: classes.checkboxField }}>
        <Checkbox
          checked={hasRecords && isAllSelected}
          classes={{ root: classes.checkbox }}
          indeterminate={!isAllSelected && !isAllDeselected}
          onChange={toggleAll}
          value="on"
          disabled={props.isDisabled}
        />
      </TableCell>
      <TableCell
        sortDirection={props.sortBy === "email" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "email"}
          direction={props.sortDir}
          onClick={() => props.onSort("email")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="USERS_EMAIL_COLUMN" />
        </TableSortLabel>
      </TableCell>
      <TableCell
        sortDirection={props.sortBy === "name" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "name"}
          direction={props.sortDir}
          onClick={() => props.onSort("name")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="USERS_NAME_COLUMN" />
        </TableSortLabel>
      </TableCell>
      <TableCell>
        <FormattedMessage id="USERS_ROLES_COLUMN" />
      </TableCell>
    </TableRow>
  );
}

UsersHeader.propTypes = {
  users: PropTypes.array.isRequired,
  selected: PropTypes.array,
  sortBy: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired
};

UsersHeader.defaultProps = {
  selected: []
};

export default UsersHeader;
