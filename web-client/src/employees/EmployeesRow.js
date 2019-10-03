import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles({
  checkboxField: {
    width: 1,
    whiteSpace: "pre"
  },
  checkbox: {
    padding: 0
  }
});

function EmployeesRow(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const isSelected = useSelector(
    state =>
      !!props.selectors.getIsSelected &&
      props.selectors.getIsSelected(state, props.node) &&
      !props.hideSelect
  );

  const toggle = useCallback(
    () =>
      dispatch(
        props.operations.setSelected({
          employeeId: props.node.id,
          isSelected: !isSelected
        })
      ),
    [isSelected, props.node.id, props.operations, dispatch]
  );

  const edit = useCallback(
    params =>
      dispatch(
        props.operations.edit({
          ...params,
          id: props.node.id
        })
      ),
    [props.node.id, props.operations, dispatch]
  );

  return (
    <TableRow>
      {!props.hideSelect && (
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
      )}
      <TableCell
        className={classNames(isSelected && "selected")}
        component="th"
        scope="row"
      >
        {_.padStart(props.node.uid, 6, "0")}
      </TableCell>
      <TableCell
        padding="checkbox"
        className={classNames(isSelected && "selected")}
        classes={{ root: classes.checkboxField }}
      >
        <Switch
          checked={props.node.checked}
          onChange={(evt, checked) => edit({ checked })}
          value="on"
          color="default"
          disabled={props.isDisabled}
        />
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        {props.node.name}
      </TableCell>
      {!props.hideDept && (
        <TableCell className={classNames(isSelected && "selected")}>
          <FormattedMessage id={`DEPT_${props.node.dept}`} />
        </TableCell>
      )}
      <TableCell className={classNames(isSelected && "selected")}>
        {props.node.title}
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        {props.node.country.name}
      </TableCell>
      <TableCell className={classNames(isSelected && "selected")}>
        <FormattedNumber value={props.node.salary} />
      </TableCell>
    </TableRow>
  );
}

EmployeesRow.propTypes = {
  node: PropTypes.object.isRequired,
  selectors: PropTypes.object.isRequired,
  operations: PropTypes.object.isRequired,
  hideSelect: PropTypes.bool.isRequired,
  hideDept: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default EmployeesRow;
