import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { usersSelectors } from "./state";
import UserRowComponent, { styles } from "./UserRow";

const mapStateToProps = (state, props) => {
  return {
    isSelected: _.includes(usersSelectors.getSelected(state), props.node.id)
  };
};

const UserRow = createFragmentContainer(
  connect(mapStateToProps)(withStyles(styles)(injectIntl(UserRowComponent))),
  {
    node: graphql`
      fragment UserRowContainer_node on User {
        id
        email
        isEmailVerified
        name
        roles
      }
    `
  }
);

export { styles };
export default UserRow;
