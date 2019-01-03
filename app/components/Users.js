import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Map, List } from "immutable";
import { FormattedMessage, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/KeyboardArrowDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import EditUserModal from "../containers/Modals/EditUserModal";
import MessageModal from "./Modals/MessageModal";

const styles = () => ({
  checkbox: {
    padding: "0.5rem"
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "stretch"
  },
  button: {
    margin: "0.5rem"
  },
  collapsing: {
    width: 1
  }
});

class Users extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    users: PropTypes.instanceOf(List).isRequired,
    onLoad: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      checkboxes: Map({}),
      actionMenuAnchor: null,
      isConfirmOpen: false
    };

    this.handleActionMenuOpen = this.handleActionMenuOpen.bind(this);
    this.handleActionMenuClose = this.handleActionMenuClose.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleCreateAction = this.handleCreateAction.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.hash === nextProps.users.hashCode()) return null;

    let checkboxes = Map({});
    for (let item of nextProps.users.values()) {
      checkboxes = checkboxes.set(
        item.get("id"),
        prevState.checkboxes.has(item.get("id"))
          ? prevState.checkboxes.get(item.get("id"))
          : false
      );
    }

    return {
      hash: nextProps.users.hashCode(),
      checkboxes
    };
  }

  getNumTrues() {
    return this.state.checkboxes // eslint-disable-line lodash/prefer-lodash-method
      .toList()
      .filter(item => item === true).size;
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.state.checkboxes.size === this.getNumTrues()) {
      this.setState({
        checkboxes: this.state.checkboxes.map(_.constant(false)) // eslint-disable-line lodash/prefer-lodash-method
      });
    } else {
      this.setState({
        checkboxes: this.state.checkboxes.map(_.constant(true)) // eslint-disable-line lodash/prefer-lodash-method
      });
    }
  }

  handleToggle(id, isChecked) {
    this.setState({ checkboxes: this.state.checkboxes.set(id, isChecked) });
  }

  handleActionMenuOpen(event) {
    this.setState({
      actionMenuAnchor: event.currentTarget
    });
  }

  handleActionMenuClose() {
    this.setState({
      actionMenuAnchor: null
    });
  }

  handleEditAction() {
    this.handleActionMenuClose();
    this.props.onEdit(this.state.checkboxes.findKey(item => !!item));
  }

  handleDeleteAction() {
    this.handleActionMenuClose();
    this.setState({ isConfirmOpen: true });
  }

  handleCancelDelete() {
    this.setState({ isConfirmOpen: false });
  }

  async handleConfirmDelete() {
    this.setState({ isConfirmOpen: false });
    await Promise.all(
      _.compact(
        // eslint-disable-next-line lodash/prefer-lodash-method
        this.state.checkboxes.map((item, id) => item && this.props.onDelete(id))
      )
    );
    this.props.onLoad();
  }

  handleCreateAction() {
    this.props.onCreate();
  }

  renderActionMenu() {
    return (
      <Menu
        anchorEl={this.state.actionMenuAnchor}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!this.state.actionMenuAnchor}
        onClose={this.handleActionMenuClose}
      >
        <MenuItem onClick={this.handleEditAction}>
          <FormattedMessage id="USERS_EDIT_ACTION" />
        </MenuItem>
        <MenuItem onClick={this.handleDeleteAction}>
          <FormattedMessage id="USERS_DELETE_ACTION" />
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.buttons}>
          <Button
            variant="contained"
            color="default"
            classes={{ root: this.props.classes.button }}
            onClick={this.handleActionMenuOpen}
            disabled={this.getNumTrues() === 0}
          >
            <FormattedMessage id="USERS_ACTION_BUTTON" />
            <MoreIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: this.props.classes.button }}
            onClick={() => this.handleToggleAll(true)}
          >
            <FormattedMessage id="USERS_CLEAR_BUTTON" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            classes={{ root: this.props.classes.button }}
            onClick={this.handleCreateAction}
          >
            <FormattedMessage id="USERS_CREATE_BUTTON" />
          </Button>
          {this.renderActionMenu()}
        </div>

        <EditUserModal />
        <MessageModal
          isOpen={this.state.isConfirmOpen}
          title="DELETE_USER_TITLE"
          text="DELETE_USER_TEXT"
          cancel="DELETE_USER_CANCEL"
          submit="DELETE_USER_SUBMIT"
          onCancel={this.handleCancelDelete}
          onSubmit={this.handleConfirmDelete}
        />

        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell
                padding="none"
                classes={{ root: this.props.classes.collapsing }}
              >
                <Checkbox
                  classes={{ root: this.props.classes.checkbox }}
                  checked={
                    !!this.state.checkboxes.size &&
                    this.state.checkboxes.size === this.getNumTrues()
                  }
                  indeterminate={
                    !!this.getNumTrues() &&
                    this.state.checkboxes.size !== this.getNumTrues()
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
                    this.state.checkboxes.get(row.get("id")) && "selected"
                  )}
                  classes={{ root: this.props.classes.collapsing }}
                >
                  <Checkbox
                    classes={{ root: this.props.classes.checkbox }}
                    checked={!!this.state.checkboxes.get(row.get("id"))}
                    onChange={event =>
                      this.handleToggle(row.get("id"), event.target.checked)
                    }
                    value="on"
                  />
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    this.state.checkboxes.get(row.get("id")) && "selected"
                  )}
                  component="th"
                  scope="row"
                >
                  {row.get("login")}
                </TableCell>
                <TableCell
                  className={classNames(
                    index % 2 ? "even" : "odd",
                    this.state.checkboxes.get(row.get("id")) && "selected"
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
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Users);
