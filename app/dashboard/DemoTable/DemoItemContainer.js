import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { employeesOperations } from "../../employees/state";
import DemoItemComponent, { styles } from "./DemoItem";

const mapDispatchToProps = dispatch => {
  return {
    onSwitch: (id, checked) =>
      dispatch(employeesOperations.edit({ id, checked }))
  };
};

const DemoItem = createFragmentContainer(
  withStyles(styles)(
    connect(
      null,
      mapDispatchToProps
    )(DemoItemComponent)
  ),
  {
    node: graphql`
      fragment DemoItemContainer_node on Employee {
        id
        uid
        checked
        name
        title
        country {
          id
          name
        }
        salary
      }
    `
  }
);

export { styles };
export default DemoItem;
