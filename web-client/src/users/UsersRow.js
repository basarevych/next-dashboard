import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import { usersOperations, usersSelectors } from "./state";

const useStyles = makeStyles({
  checkboxField: {
    width: 1,
    whiteSpace: "pre"
  },
  checkbox: {
    padding: 0
  }
});

function UsersRow(props) {
  const intl = useIntl();
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const roles = useMemo(() => _.clone(props.node.roles).sort(), [
    props.node.roles
  ]);

  const isSelected = useSelector(state =>
    usersSelectors.getIsSelected(state, props.node)
  );

  const toggle = useCallback(
    () =>
      dispatch(
        usersOperations.setSelected({
          userId: props.node.id,
          isSelected: !isSelected
        })
      ),
    [isSelected, props.node.id, dispatch]
  );

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        className={classNames(isSelected && "selected")}
        classes={{ root: classes.checkboxField }}
      >
        <Checkbox
          checked={isSelected}
          classes={{ root: classes.checkbox }}
          onChange={toggle}
          value="on"
          disabled={props.isDisabled}
        />
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        {props.node.email}
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        {props.node.name}
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        {_.map(roles, item =>
          intl.formatMessage({ id: `EDIT_USER_${item}_LABEL` })
        ).join(", ")}
      </TableCell>
    </TableRow>
  );
}

UsersRow.propTypes = {
  node: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default UsersRow;
