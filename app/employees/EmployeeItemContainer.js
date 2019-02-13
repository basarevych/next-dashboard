import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { employeesSelectors, employeesOperations } from "./state";
import EmployeeItemComponent, { styles } from "./EmployeeItem";

const mapStateToProps = (state, props) => {
  return {
    isSelected: _.includes(employeesSelectors.getSelected(state), props.node.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSwitch: (id, checked) =>
      dispatch(employeesOperations.edit({ id, checked }))
  };
};

const EmployeeItem = createFragmentContainer(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(EmployeeItemComponent)
  ),
  {
    node: graphql`
      fragment EmployeeItemContainer_node on Employee {
        id
        uid
        checked
        name
        dept
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
export default EmployeeItem;
