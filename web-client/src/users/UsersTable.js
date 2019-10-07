import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import responsiveTable from "../../styles/responsiveTable";
import UsersHeader from "./UsersHeader";
import UsersRow from "./UsersRowContainer";

const useStyles = makeStyles(theme => ({
  table: {
    [theme.breakpoints.down("md")]: responsiveTable(theme)
  }
}));

function UsersTable(props) {
  const classes = useStyles(props);

  return (
    <Table className={classes.table}>
      <TableHead>
        <UsersHeader
          users={props.users}
          selected={props.selected}
          sortBy={props.sortBy}
          sortDir={props.sortDir}
          onSort={props.onSort}
          isDisabled={props.isDisabled}
        />
      </TableHead>
      <TableBody>
        {props.users.map(edge => (
          <UsersRow
            key={edge.cursor}
            node={edge.node}
            isDisabled={props.isDisabled}
          />
        ))}
      </TableBody>
    </Table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  selected: PropTypes.array,
  sortBy: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default UsersTable;
