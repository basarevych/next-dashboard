import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { graphql } from "react-relay";
import { FormattedMessage, intlShape } from "react-intl";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import EditUserModal from "../containers/Modals/EditUserModal";
import ConfirmModal from "./Modals/ConfirmModal";
import responsiveTable from "../styles/responsiveTable";

export const styles = theme => ({
  paper: {
    padding: "1rem"
  },
  table: {
    [theme.breakpoints.down("sm")]: responsiveTable(theme)
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
  checkboxField: {
    width: 1
  },
  checkbox: {
    padding: 0
  }
});

export const query = {
  viewer: graphql`
    fragment Users_users on Viewer {
      users(
        first: 2147483647 # max GraphQLInt
      ) @connection(key: "Users_users") {
        edges {
          node {
            id
            email
            roles
          }
        }
      }
    }
  `
};

class Users extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isConfirmOpen: false
    };

    this.handleCreateAction = this.handleCreateAction.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
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
    return !!_.find(this.props.selected, item => item === userId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) {
      this.props.onDeselectAll();
    } else {
      this.props.onSelectAll(_.map(this.props.viewer.users.edges, "node.id"));
    }
  }

  handleToggle(userId) {
    this.props.onSetSelected(userId, !_.includes(this.props.selected, userId));
  }

  handleCreateAction() {
    this.props.onCreate();
  }

  handleEditAction() {
    this.props.onEdit();
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

  render() {
    return (
      <React.Fragment>
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
            disabled={this.isAllDeselected()}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleEditAction}
          >
            <FormattedMessage id="USERS_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.isAllDeselected()}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleDeleteAction}
          >
            <FormattedMessage id="USERS_DELETE_BUTTON" />
          </Button>
        </div>

        <Paper className={this.props.classes.paper}>
          <Table padding="dense" className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell
                  padding="none"
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
                <TableRow key={edge.node.id}>
                  <TableCell
                    padding="none"
                    className={classNames(
                      this.isSelected(edge.node.id) && "selected"
                    )}
                    classes={{ root: this.props.classes.checkboxField }}
                  >
                    <Checkbox
                      checked={!!this.isSelected(edge.node.id)}
                      classes={{ root: this.props.classes.checkbox }}
                      onChange={() => this.handleToggle(edge.node.id)}
                      value="on"
                    />
                  </TableCell>
                  <TableCell
                    className={classNames(
                      this.isSelected(edge.node.id) && "selected"
                    )}
                    component="th"
                    scope="row"
                  >
                    {edge.node.email}
                  </TableCell>
                  <TableCell
                    className={classNames(
                      this.isSelected(edge.node.id) && "selected"
                    )}
                  >
                    {_.map(edge.node.roles, item =>
                      this.props.intl.formatMessage({
                        id: `EDIT_USER_${item}_LABEL`
                      })
                    ).join(", ")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

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
      </React.Fragment>
    );
  }
}

export default Users;
