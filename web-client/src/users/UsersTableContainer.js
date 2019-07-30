import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { usersOperations } from "./state";
import UsersTableComponent, { styles } from "./UsersTable";

const mapDispatchToProps = dispatch => {
  return {
    onSetSelected: (userId, isSelected) =>
      dispatch(usersOperations.setSelected({ userId, isSelected })),
    onSelectAll: userIds => dispatch(usersOperations.selectAll({ userIds })),
    onDeselectAll: exceptUserIds =>
      dispatch(usersOperations.deselectAll({ exceptUserIds }))
  };
};

const UsersTable = withStyles(styles)(
  injectIntl(
    connect(
      null,
      mapDispatchToProps
    )(UsersTableComponent)
  )
);
export default UsersTable;
