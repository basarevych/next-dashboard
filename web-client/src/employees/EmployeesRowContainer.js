import { graphql, createFragmentContainer } from "react-relay";
import EmployeesRowComponent from "./EmployeesRow";

const EmployeesRow = createFragmentContainer(EmployeesRowComponent, {
  node: graphql`
    fragment EmployeesRowContainer_node on Employee {
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
});

export default EmployeesRow;
