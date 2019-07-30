import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import RefreshIcon from "@material-ui/icons/Refresh";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import EmployeesTable from "./EmployeesTableContainer";
import EditEmployeeModal from "./EditEmployeeModalContainer";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import { Subscription } from "../app/providers/Relay";

export const pageSize = 10;
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
});

const subscription = graphql`
  subscription EmployeesSubscription {
    employeeEvent {
      id
    }
  }
`;

class Employees extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
    isEditModalOpen: PropTypes.bool.isRequired,
    selected: PropTypes.array.isRequired,
    getToken: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      pageSize,
      pageNumber: 0,
      variables: {
        sortBy,
        sortDir,
        first: pageSize
      },
      isConfirmOpen: false
    };

    this.isDestroyed = false;

    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleRefreshAction = this.handleRefreshAction.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const total = _.get(this.props.viewer, "employees.totalCount", 0);
    if (total && this.state.pageNumber * this.state.pageSize >= total) {
      // we fell off the list - reset to the beginning
      let variables = {
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

    this.props.onDeselectAll(
      _.map(_.get(this.props.viewer, "employees.edges", []), "node.id")
    );
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  async handleCreateAction() {
    await this.props.onCreate();
  }

  async handleEditAction() {
    await this.props.onEdit();
  }

  handleDeleteAction() {
    this.setState({ isConfirmOpen: true });
  }

  handleCancelDelete() {
    this.setState({ isConfirmOpen: false });
  }

  async handleConfirmDelete() {
    this.setState({ isConfirmOpen: false });
    await Promise.all(
      _.map(this.props.selected, employeeId => this.props.onDelete(employeeId))
    );
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

  render() {
    return (
      <React.Fragment>
        <Subscription
          subscription={subscription}
          onNext={this.handleRefreshAction}
        />

        <div className={this.props.classes.message}>
          <Typography variant="h6" className={this.props.classes.messageTitle}>
            <FormattedMessage id="EMPLOYEES_MESSAGE_TITLE" />
          </Typography>
          <Typography
            variant="body1"
            className={this.props.classes.messageContent}
          >
            <FormattedMessage id="EMPLOYEES_MESSAGE_CONTENT" />
          </Typography>
        </div>

        <div className={this.props.classes.layout}>
          <div className={this.props.classes.header}>
            <Typography variant="h3" color="inherit">
              <FormattedMessage id="TITLE_TABLES" />
            </Typography>
            <IconButton
              color="inherit"
              onClick={this.handleRefreshAction}
              disabled={!this.props.isSubscribed}
            >
              <RefreshIcon />
            </IconButton>
          </div>
          <div className={this.props.classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              classes={{ root: this.props.classes.button }}
              onClick={this.handleCreateAction}
              disabled={!this.props.isSubscribed}
            >
              <FormattedMessage id="EMPLOYEES_CREATE_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: this.props.classes.button }}
              onClick={this.handleEditAction}
              disabled={!this.props.isSubscribed || !this.props.selected.length}
            >
              <FormattedMessage id="EMPLOYEES_EDIT_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: this.props.classes.button }}
              onClick={this.handleDeleteAction}
              disabled={!this.props.isSubscribed || !this.props.selected.length}
            >
              <FormattedMessage id="EMPLOYEES_DELETE_BUTTON" />
            </Button>
          </div>

          <Paper className={this.props.classes.paper}>
            <EmployeesTable
              employees={_.get(this.props.viewer, "employees.edges", [])}
              selected={this.props.selected}
              sortBy={this.state.variables.sortBy}
              sortDir={this.state.variables.sortDir}
              onSort={this.handleSort}
              isDisabled={!this.props.isSubscribed}
            />

            <TablePagination
              rowsPerPageOptions={[10, 20, 30, 50, 100]}
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

          {this.props.isEditModalOpen && <EditEmployeeModal />}

          {this.state.isConfirmOpen && (
            <ConfirmModal
              title="DELETE_EMPLOYEE_TITLE"
              text="DELETE_EMPLOYEE_TEXT"
              cancel="DELETE_EMPLOYEE_CANCEL"
              submit="DELETE_EMPLOYEE_SUBMIT"
              onCancel={this.handleCancelDelete}
              onSubmit={this.handleConfirmDelete}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Employees;
