import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { usersSelectors } from "./state";
import UserItemComponent, { styles } from "./UserItem";

const mapStateToProps = (state, props) => {
  return {
    isSelected: _.includes(usersSelectors.getSelected(state), props.node.id)
  };
};

const UserItem = createFragmentContainer(
  withStyles(styles)(injectIntl(connect(mapStateToProps)(UserItemComponent))),
  {
    node: graphql`
      fragment UserItemContainer_node on User {
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
export default UserItem;
