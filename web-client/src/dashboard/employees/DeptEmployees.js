import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { intlShape } from "react-intl";
import { AutoSizer } from "react-virtualized";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TablePagination from "@material-ui/core/TablePagination";
import EmployeesTable from "../../employees/EmployeesTableContainer";
import { Subscription } from "../../app/providers/Relay";
import constants from "../../../common/constants";

export const pageSize = 5;
export const sortBy = "uid";
export const sortDir = "asc";

export const defaultDept = _.values(constants.depts)[0];

export const styles = theme => ({
  paper: {
    background: theme.main.paper
  }
});

const subscription = graphql`
  subscription DeptEmployeesSubscription {
    employeeEvent {
      id
    }
  }
`;

class DeptEmployees extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
    relay: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.depts = _.values(constants.depts);
    this.state = {
      index: _.indexOf(this.depts, defaultDept),
      pageSize,
      pageNumber: 0,
      variables: {
        dept: defaultDept,
        sortBy,
        sortDir,
        first: pageSize
      }
    };

    this.isDestroyed = false;

    this.handleRefreshAction = this.handleRefreshAction.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
  }

  componentDidUpdate(prevProps) {
    const total = _.get(this.props.viewer, "employees.totalCount", 0);
    if (total && this.state.pageNumber * this.state.pageSize >= total) {
      // we fell off the list - reset to the beginning
      let variables = {
        dept: defaultDept,
        sortBy,
        sortDir,
        first: this.state.pageSize
      };
      setTimeout(() => {
        this.setState({ pageNumber: 0, variables }, () => {
          if (!this.isDestroyed)
            this.props.relay.refetch(variables, null, null, { force: true });
        });
      });
    } else if (!prevProps.isSubscribed && this.props.isSubscribed) {
      setTimeout(this.handleRefreshAction);
    }
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  handleRefreshAction() {
    if (!this.isDestroyed) {
      this.props.relay.refetch(this.state.variables, null, null, {
        force: true
      });
    }
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
    this.setState({ pageNumber: 0, variables }, () => {
      if (!this.isDestroyed)
        this.props.relay.refetch(variables, null, null, { force: true });
    });
  }

  handleChangeRowsPerPage(evt) {
    const pageSize = evt.target.value;
    let variables = {
      dept: this.state.variables.dept,
      sortBy: this.state.variables.sortBy,
      sortDir: this.state.variables.sortDir,
      first: pageSize
    };
    this.setState({ pageSize, pageNumber: 0, variables }, () => {
      if (!this.isDestroyed)
        this.props.relay.refetch(variables, null, null, { force: true });
    });
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

    this.setState({ pageNumber, variables }, () => {
      if (!this.isDestroyed)
        this.props.relay.refetch(variables, null, null, { force: true });
    });
  }

  handleChangeDept(event, index) {
    let variables = {
      dept: this.depts[index],
      sortBy,
      sortDir,
      first: this.state.pageSize
    };
    this.setState({ index, pageNumber: 0, variables }, () => {
      if (!this.isDestroyed)
        this.props.relay.refetch(variables, null, null, { force: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Subscription
          subscription={subscription}
          onNext={this.handleRefreshAction}
        />

        <AutoSizer disableHeight>
          {({ width }) => (
            <Paper style={{ width }} className={this.props.classes.paper}>
              <AppBar position="static">
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  value={this.state.index}
                  onChange={this.handleChangeDept}
                >
                  {_.map(this.depts, dept => (
                    <Tab
                      key={`tab-${dept}`}
                      label={this.props.intl.formatMessage({
                        id: `DEPT_${dept}`
                      })}
                      disabled={!this.props.isSubscribed}
                    />
                  ))}
                </Tabs>
              </AppBar>

              <EmployeesTable
                dept={this.depts[this.state.index]}
                employees={_.get(this.props.viewer, "employees.edges", [])}
                selected={null}
                sortBy={this.state.variables.sortBy}
                sortDir={this.state.variables.sortDir}
                onSort={this.handleSort}
                isDisabled={!this.props.isSubscribed}
              />

              <TablePagination
                rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
                component="div"
                count={_.get(this.props.viewer, "employees.totalCount", 0)}
                rowsPerPage={this.state.pageSize}
                labelRowsPerPage=""
                page={this.state.pageNumber}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                onChangePage={this.handleChangePage}
                nextIconButtonProps={{ disabled: !this.props.isSubscribed }}
                backIconButtonProps={{ disabled: !this.props.isSubscribed }}
                SelectProps={{ disabled: !this.props.isSubscribed }}
              />
            </Paper>
          )}
        </AutoSizer>
      </React.Fragment>
    );
  }
}

export default DeptEmployees;
