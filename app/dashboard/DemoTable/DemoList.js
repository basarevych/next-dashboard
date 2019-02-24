import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import responsiveTable from "../../app/styles/responsiveTable";
import DemoItem, { styles as itemStyles } from "./DemoItemContainer";
import { RelayContext, subscribe } from "../../app/providers/Relay";

export const pageSize = 5;
export const sortBy = "uid";
export const sortDir = "asc";

export const styles = theme => ({
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
    margin: "3rem 1rem 1rem 1rem"
  },
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  },
  buttons: {
    marginTop: "3rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
  button: {
    margin: "0.5rem"
  },
  paper: {
    background: theme.main.paper
  },
  table: {
    [theme.breakpoints.down("sm")]: responsiveTable(theme)
  },
  grow: {
    flex: 1
  },
  ...itemStyles(theme)
});

const subscription = graphql`
  subscription DemoListSubscription($token: String) {
    employeeEvent(token: $token) {
      id
    }
  }
`;

class DemoList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    dept: PropTypes.string.isRequired,
    getToken: PropTypes.func.isRequired
  };

  static contextType = RelayContext;

  constructor(props) {
    super(props);

    this.state = {
      pageSize,
      pageNumber: 0,
      variables: {
        dept: props.dept,
        sortBy,
        sortDir,
        first: pageSize
      },
      isConfirmOpen: false
    };

    this.handleRefreshAction = this.handleRefreshAction.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = subscribe({
      subscription,
      getToken: this.props.getToken,
      environment: this.context,
      callback: this.handleRefreshAction
    });
  }

  componentDidUpdate() {
    if (this.state.variables.dept !== this.props.dept) {
      let variables = {
        dept: this.props.dept,
        sortBy,
        sortDir,
        first: this.state.pageSize
      };
      return this.setState({ pageNumber: 0, variables }, () =>
        this.props.relay.refetch(variables, null, null, { force: true })
      );
    }

    const total = _.get(this.props.viewer, "employees.totalCount", 0);
    if (total && this.state.pageNumber * this.state.pageSize >= total) {
      // we fell off the list - reset to the beginning
      let variables = {
        dept: this.state.variables.dept,
        sortBy,
        sortDir,
        first: this.state.pageSize
      };
      this.setState({ pageNumber: 0, variables }, () =>
        this.props.relay.refetch(variables, null, null, { force: true })
      );
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  handleRefreshAction() {
    this.props.relay.refetch(this.state.variables, null, null, { force: true });
  }

  handleSort(sortBy) {
    let sortDir = "asc";
    if (this.state.variables.sortBy === sortBy)
      sortDir = this.state.variables.sortDir === "asc" ? "desc" : "asc";
    let variables = {
      dept: this.state.variables.dept,
      sortBy,
      sortDir,
      first: this.state.pageSize
    };
    this.setState({ pageNumber: 0, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  handleChangeRowsPerPage(evt) {
    const pageSize = evt.target.value;
    let variables = {
      dept: this.state.variables.dept,
      sortBy: this.state.variables.sortBy,
      sortDir: this.state.variables.sortDir,
      first: pageSize
    };
    this.setState({ pageSize, pageNumber: 0, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  handleChangePage(evt, pageNumber) {
    if (this.state.pageNumber === pageNumber) return;

    let variables = {
      dept: this.state.variables.dept,
      sortBy: this.state.variables.sortBy,
      sortDir: this.state.variables.sortDir
    };

    if (pageNumber === 0) {
      variables.first = this.state.pageSize;
    } else if (pageNumber > this.state.pageNumber) {
      if (
        pageNumber + 1 >
        Math.ceil(
          _.get(this.props.viewer, "employees.totalCount", 0) /
            this.state.pageSize
        )
      ) {
        return;
      }
      variables.first = this.state.pageSize;
      variables.after = _.get(
        this.props.viewer,
        "employees.pageInfo.endCursor",
        null
      );
    } else {
      if (this.state.pageNumber <= 0) return;
      variables.last = this.state.pageSize;
      variables.before = _.get(
        this.props.viewer,
        "employees.pageInfo.startCursor",
        null
      );
    }

    this.setState({ pageNumber, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Table padding="dense" className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                padding="checkbox"
                sortDirection={
                  this.state.variables.sortBy === "uid"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "uid"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("uid")}
                >
                  <FormattedMessage id="EMPLOYEES_UID_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={
                  this.state.variables.sortBy === "name"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "name"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("name")}
                >
                  <FormattedMessage id="EMPLOYEES_NAME_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={
                  this.state.variables.sortBy === "title"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "title"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("title")}
                >
                  <FormattedMessage id="EMPLOYEES_TITLE_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={
                  this.state.variables.sortBy === "country"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "country"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("country")}
                >
                  <FormattedMessage id="EMPLOYEES_COUNTRY_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="right"
                sortDirection={
                  this.state.variables.sortBy === "salary"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "salary"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("salary")}
                >
                  <FormattedMessage id="EMPLOYEES_SALARY_COLUMN" />
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(_.get(this.props.viewer, "employees.edges", []), edge => (
              <DemoItem key={edge.cursor} node={edge.node} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          component="div"
          count={_.get(this.props.viewer, "employees.totalCount", 0)}
          rowsPerPage={this.state.pageSize}
          page={this.state.pageNumber}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          onChangePage={this.handleChangePage}
        />
      </Paper>
    );
  }
}

export default DemoList;
