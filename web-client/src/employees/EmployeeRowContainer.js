import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { graphql, createFragmentContainer } from "react-relay";
import { employeesSelectors, employeesOperations } from "./state";
import EmployeeRowComponent, { styles } from "./EmployeeRow";

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

const EmployeeRow = createFragmentContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(EmployeeRowComponent)),
  {
    node: graphql`
      fragment EmployeeRowContainer_node on Employee {
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
export default EmployeeRow;
