import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { injectIntl } from "react-intl";
import { employeesOperations, employeesSelectors } from "./state";
import EditEmployeeModalComponent, { styles } from "./EditEmployeeModal";

const mapStateToProps = state => {
  return {
    currentId: employeesSelectors.getEditModalEmployeeId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(employeesOperations.hideEditModal()),
    onCreate: (uid, checked, name, dept, title, country, salary) =>
      dispatch(
        employeesOperations.create({
          uid,
          checked,
          name,
          dept,
          title,
          country,
          salary
        })
      ),
    onEdit: (id, uid, checked, name, dept, title, country, salary) =>
      dispatch(
        employeesOperations.edit({
          id,
          uid,
          checked,
          name,
          dept,
          title,
          country,
          salary
        })
      )
  };
};

const EditEmployeeModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(injectIntl(EditEmployeeModalComponent)));

export default EditEmployeeModal;
