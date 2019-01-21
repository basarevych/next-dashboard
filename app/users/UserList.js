import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { requestSubscription, graphql } from "react-relay";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import RefreshIcon from "@material-ui/icons/Refresh";
import responsiveTable from "../app/styles/responsiveTable";
import UserItem, { styles as itemStyles } from "./UserItemContainer";
import EditUserModal from "./EditUserModalContainer";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import { RelayContext } from "../app/providers/Relay";

export const pageSize = 20;

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
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
    isEditing: PropTypes.bool.isRequired,
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
      lastVariables: {
        first: pageSize
      },
      isConfirmOpen: false
    };

    this.isDestroyed = false;
    this.refreshTime = 0;
    this.refreshTimer = null;

    this.handleToggle = this.handleToggle.bind(this);
    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  async subscribe() {
    if (this.subscription) this.subscription.dispose();
    if (this.isDestroyed) return;
    this.subscription = requestSubscription(this.context, {
      subscription,
      variables: { token: await this.props.getToken() },
      onCompleted: () => {
        this.subscription = null;
        setTimeout(() => this.subscribe(), 1000);
      },
      onError: error => {
        this.subscription = null;
        console.error(error);
        setTimeout(() => this.subscribe(), 1000);
      },
      onNext: () => {
        if (this.refreshTimer) return;
        const delta = Date.now() - this.refreshTime;
        this.refreshTimer = setTimeout(
          this.handleRefresh,
          delta < 1000 ? delta : 0
        );
      }
    });
  }

  componentDidMount() {
    this.subscribe();
  }

  componentDidUpdate() {
    if (
      this.props.viewer.users.totalCount &&
      this.state.pageNumber * this.state.pageSize >=
        this.props.viewer.users.totalCount
    ) {
      // we fell off the list - reset to the beginning
      const variables = {
        first: this.state.pageSize,
        after: null,
        last: null,
        before: null
      };
      this.props.relay.refetch(
        variables,
        null,
        () => this.setState({ pageNumber: 0, lastVariables: variables }),
        { force: true }
      );
    }
  }

  componentWillUnmount() {
    this.isDestroyed = true;
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  hasRecords() {
    return this.props.viewer.users.edges.length > 0;
  }

  isAllSelected() {
    const list = _.map(this.props.viewer.users.edges, "node.id");
    return _.difference(list, this.props.selected).length === 0;
  }

  isAllDeselected() {
    return this.props.selected.length === 0;
  }

  isSelected(userId) {
    return _.includes(this.props.selected, userId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) this.props.onDeselectAll();
    else
      this.props.onSelectAll(_.map(this.props.viewer.users.edges, "node.id"));
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

  handleRefresh() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }

    if (this.isDestroyed) return;

    this.props.relay.refetch(this.state.lastVariables, null, null, {
      force: true
    });
    this.refreshTime = Date.now();
  }

  handleChangeRowsPerPage(evt) {
    const pageSize = evt.target.value;
    const variables = {
      first: pageSize,
      after: null,
      last: null,
      before: null
    };
    this.props.relay.refetch(
      variables,
      null,
      () =>
        this.setState({ pageSize, pageNumber: 0, lastVariables: variables }),
      { force: true }
    );
  }

  handleChangePage(evt, pageNumber) {
    if (this.state.pageNumber === pageNumber) return;

    let state = { pageNumber };
    let variables = { first: null, after: null, last: null, before: null };
    if (pageNumber === 0) {
      variables.first = this.state.pageSize;
    } else if (pageNumber > this.state.pageNumber) {
      if (
        pageNumber + 1 >
        Math.ceil(this.props.viewer.users.totalCount / this.state.pageSize)
      ) {
        return;
      }
      variables.first = this.state.pageSize;
      variables.after = _.last(this.props.viewer.users.edges).cursor;
    } else {
      if (this.state.pageNumber <= 0) return;
      variables.last = this.state.pageSize;
      variables.before = _.head(this.props.viewer.users.edges).cursor;
    }
    state.lastVariables = variables;

    this.props.relay.refetch(variables, null, () => this.setState(state), {
      force: true
    });
  }

  renderTable() {
    return (
      <Paper className={this.props.classes.paper}>
        <Toolbar>
          <Typography variant="h6">
            <FormattedMessage id="TITLE_USERS" />
          </Typography>
          <div className={this.props.classes.grow} />
          <IconButton color="inherit" onClick={this.handleRefresh}>
            <RefreshIcon />
          </IconButton>
        </Toolbar>
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
              <TableCell>
                <FormattedMessage id="USERS_LOGIN_COLUMN" />
              </TableCell>
              <TableCell>
                <FormattedMessage id="USERS_ROLES_COLUMN" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(this.props.viewer.users.edges, edge => (
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
          count={this.props.viewer.users.totalCount}
          rowsPerPage={this.state.pageSize}
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

        {this.props.isEditing && <EditUserModal />}

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
