import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
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

const styles = theme => ({
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

class Users extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    users: PropTypes.instanceOf(List).isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    isAllDeselected: PropTypes.bool.isRequired,
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

  handleToggleAll(forceOff = false) {
    if (forceOff || this.props.isAllSelected) this.props.onDeselectAll();
    else this.props.onSelectAll();
  }

  handleToggle(userId) {
    // eslint-disable-next-line lodash/prefer-lodash-method
    let user = this.props.users.find(user => user.get("id") === userId);
    let isSelected = user && user.get("isSelected");
    this.props.onSetSelected(userId, !isSelected);
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
      // eslint-disable-next-line lodash/prefer-lodash-method
      this.props.users
        .filter(user => user.get("isSelected"))
        .map(user => this.props.onDelete(user.get("id")))
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
            disabled={this.props.isAllDeselected}
            classes={{ root: this.props.classes.button }}
            onClick={this.handleEditAction}
          >
            <FormattedMessage id="USERS_EDIT_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.isAllDeselected}
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
                    checked={
                      !!this.props.users.size && this.props.isAllSelected
                    }
                    classes={{ root: this.props.classes.checkbox }}
                    indeterminate={
                      !this.props.isAllSelected && !this.props.isAllDeselected
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
              {/* eslint-disable-next-line lodash/prefer-lodash-method */}
              {this.props.users.map((row, index) => (
                <TableRow key={`row-${index}`}>
                  <TableCell
                    padding="none"
                    className={classNames(
                      index % 2 ? "even" : "odd",
                      row.get("isSelected") && "selected"
                    )}
                    classes={{ root: this.props.classes.checkboxField }}
                  >
                    <Checkbox
                      checked={!!row.get("isSelected")}
                      classes={{ root: this.props.classes.checkbox }}
                      onChange={() => this.handleToggle(row.get("id"))}
                      value="on"
                    />
                  </TableCell>
                  <TableCell
                    className={classNames(
                      index % 2 ? "even" : "odd",
                      row.get("isSelected") && "selected"
                    )}
                    component="th"
                    scope="row"
                  >
                    {row.get("email")}
                  </TableCell>
                  <TableCell
                    className={classNames(
                      index % 2 ? "even" : "odd",
                      row.get("isSelected") && "selected"
                    )}
                  >
                    {/* eslint-disable-next-line lodash/prefer-lodash-method */}
                    {row
                      .get("roles")
                      .toJS()
                      .map(item =>
                        this.props.intl.formatMessage({
                          id: `EDIT_USER_${item}_LABEL`
                        })
                      )
                      .join(", ")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

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
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Users);
