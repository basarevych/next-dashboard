import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import RefreshIcon from "@material-ui/icons/Refresh";
import responsiveTable from "../app/styles/responsiveTable";
import UserItem, { styles as itemStyles } from "./UserItemContainer";
import EditUserModal from "./EditUserModalContainer";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import { RelayContext, subscribe } from "../app/providers/Relay";

export const pageSize = 10;
export const sortBy = "email";
export const sortDir = "asc";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  },
  header: {
    marginTop: "3rem",
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
  subscription UserListSubscription($token: String) {
    userEvent(token: $token) {
      id
    }
  }
`;

class UserList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    getToken: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
  };

  static contextType = RelayContext;

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

    this.handleToggle = this.handleToggle.bind(this);
    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
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
    const total = _.get(this.props.viewer, "users.totalCount", 0);
    if (total && this.state.pageNumber * this.state.pageSize >= total) {
      // we fell off the list - reset to the beginning
      let variables = {
        sortBy,
        sortDir,
        first: this.state.pageSize
      };
      setTimeout(() => {
        this.setState({ pageNumber: 0, variables }, () =>
          this.props.relay.refetch(variables, null, null, { force: true })
        );
      });
    }
    this.props.onDeselectAll(
      _.map(_.get(this.props.viewer, "users.edges", []), "node.id")
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  hasRecords() {
    return _.get(this.props.viewer, "users.edges", []).length > 0;
  }

  isAllSelected() {
    const list = _.map(_.get(this.props.viewer, "users.edges", []), "node.id");
    return _.difference(list, this.props.selected).length === 0;
  }

  isAllDeselected() {
    return this.props.selected.length === 0;
  }

  isSelected(userId) {
    return _.includes(this.props.selected, userId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) {
      this.props.onDeselectAll();
    } else {
      this.props.onSelectAll(
        _.map(_.get(this.props.viewer, "users.edges", []), "node.id")
      );
    }
  }

  handleToggle(userId) {
    this.props.onSetSelected(userId, !this.isSelected(userId));
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
      _.map(this.props.selected, userId => this.props.onDelete(userId))
    );
  }

  handleRefreshAction() {
    this.props.relay.refetch(this.state.variables, null, null, { force: true });
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
    this.setState({ pageNumber: 0, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  handleChangeRowsPerPage(evt) {
    const pageSize = evt.target.value;
    let variables = {
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
      sortBy: this.state.variables.sortBy,
      sortDir: this.state.variables.sortDir
    };

    if (pageNumber === 0) {
      variables.first = this.state.pageSize;
    } else if (pageNumber > this.state.pageNumber) {
      if (
        pageNumber + 1 >
        Math.ceil(
          _.get(this.props.viewer, "users.totalCount", 0) / this.state.pageSize
        )
      ) {
        return;
      }
      variables.first = this.state.pageSize;
      variables.after = _.get(
        this.props.viewer,
        "users.pageInfo.endCursor",
        null
      );
    } else {
      if (this.state.pageNumber <= 0) return;
      variables.last = this.state.pageSize;
      variables.before = _.get(
        this.props.viewer,
        "users.pageInfo.startCursor",
        null
      );
    }

    this.setState({ pageNumber, variables }, () =>
      this.props.relay.refetch(variables, null, null, { force: true })
    );
  }

  renderTable() {
    return (
      <Paper className={this.props.classes.paper}>
        <Table padding="dense" className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                padding="checkbox"
                classes={{ root: this.props.classes.checkboxField }}
              >
                <Checkbox
                  checked={!!this.hasRecords() && this.isAllSelected()}
                  classes={{ root: this.props.classes.checkbox }}
                  indeterminate={
                    !this.isAllSelected() && !this.isAllDeselected()
                  }
                  onChange={() => this.handleToggleAll()}
                  value="on"
                />
              </TableCell>
              <TableCell
                sortDirection={
                  this.state.variables.sortBy === "email"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "email"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("email")}
                >
                  <FormattedMessage id="USERS_EMAIL_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={
                  this.state.variables.sortBy === "isEmailVerified"
                    ? this.state.variables.sortDir
                    : false
                }
              >
                <TableSortLabel
                  active={this.state.variables.sortBy === "isEmailVerified"}
                  direction={this.state.variables.sortDir}
                  onClick={() => this.handleSort("isEmailVerified")}
                >
                  <FormattedMessage id="USERS_EMAIL_VERIFIED_COLUMN" />
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
                  <FormattedMessage id="USERS_NAME_COLUMN" />
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <FormattedMessage id="USERS_ROLES_COLUMN" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(_.get(this.props.viewer, "users.edges", []), edge => (
              <UserItem
                key={edge.cursor}
                node={edge.node}
                onToggle={this.handleToggle}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 50, 100]}
          component="div"
          count={_.get(this.props.viewer, "users.totalCount", 0)}
          rowsPerPage={this.state.pageSize}
          labelRowsPerPage=""
          page={this.state.pageNumber}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          onChangePage={this.handleChangePage}
        />
      </Paper>
    );
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.header}>
          <Typography variant="h3">
            <FormattedMessage id="TITLE_USERS" />
          </Typography>
          <IconButton color="inherit" onClick={this.handleRefreshAction}>
            <RefreshIcon />
          </IconButton>
        </div>

        <div className={this.props.classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: this.props.classes.button }}
            onClick={this.handleCreateAction}
          >
            <FormattedMessage id="USERS_CREATE_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.selected.length === 0}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleEditAction}
          >
            <FormattedMessage id="USERS_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.selected.length === 0}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleDeleteAction}
          >
            <FormattedMessage id="USERS_DELETE_BUTTON" />
          </Button>
        </div>

        {this.renderTable()}

        <EditUserModal />

        <ConfirmModal
          isOpen={this.state.isConfirmOpen}
          title="DELETE_USER_TITLE"
          text="DELETE_USER_TEXT"
          cancel="DELETE_USER_CANCEL"
          submit="DELETE_USER_SUBMIT"
          onCancel={this.handleCancelDelete}
          onSubmit={this.handleConfirmDelete}
        />
      </div>
    );
  }
}

export default UserList;
