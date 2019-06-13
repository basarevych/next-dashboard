import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { fromGlobalId } from "graphql-relay";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { QueryRenderer } from "../app/providers/Relay";
import { Form, Field } from "../app/forms";
import constants from "../../common/constants";
import fields from "../../common/forms/employee";
import { countryOptions } from "../../common/src/countries";

export const styles = theme => ({
  error: {
    color: red[500]
  },
  radioError: {
    marginLeft: 16,
    borderTop: `2px solid ${theme.palette.text.secondary}`
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

export const query = graphql`
  query EditEmployeeModalQuery($currentId: ID) {
    viewer {
      employee(id: $currentId) {
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
    }
  }
`;

class EditEmployeeModal extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    currentId: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.countryOptions = countryOptions;
    this.state = {
      initialValues: null
    };

    this.submit = this.submit.bind(this);
  }

  async submit(
    { uid, checked, name, dept, title, country, salary },
    { setSubmitting, setErrors, setStatus }
  ) {
    let result;
    if (this.props.currentId) {
      result = await this.props.onEdit(
        this.props.currentId,
        uid,
        checked || false,
        name,
        dept,
        title,
        country,
        parseInt(salary)
      );
    } else {
      result = await this.props.onCreate(
        uid,
        checked || false,
        name,
        dept,
        title,
        country,
        parseInt(salary)
      );
    }
    if (result === true) {
      setSubmitting(false);
      this.props.onClose();
    } else {
      let { _status, ...errors } = result;
      setSubmitting(false);
      setErrors(errors);
      setStatus(_status);
    }
  }

  renderForm() {
    return (
      <Form
        fields={fields}
        onSubmit={this.submit}
        initialValues={this.state.initialValues}
        render={({ isSubmitting, status, handleSubmit }) => (
          <Dialog maxWidth="xs" open onClose={this.props.onClose}>
            <DialogTitle>
              <FormattedMessage
                id={
                  this.props.currentId
                    ? "EDIT_EMPLOYEE_TITLE_EDIT"
                    : "EDIT_EMPLOYEE_TITLE_CREATE"
                }
              />
            </DialogTitle>
            {!!status && (
              <DialogContent>
                {_.map(
                  _.isArray(status) ? status : [status],
                  (error, index) => (
                    <DialogContentText
                      key={`error-${index}`}
                      classes={{ root: this.props.classes.error }}
                    >
                      {_.isArray(error) ? (
                        <FormattedMessage id={error[0]} values={error[1]} />
                      ) : (
                        <FormattedMessage id={error} />
                      )}
                    </DialogContentText>
                  )
                )}
              </DialogContent>
            )}
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="uid"
                    type="text"
                    messages={["EDIT_EMPLOYEE_UID_HINT"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="name" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field name="checked" type="checkbox" />
                </Grid>
                <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6}>
                    {_.map(_.values(constants.depts), (item, index) => {
                      if (index % 2 !== 0) return null;
                      return (
                        <Field
                          key={`radio-${item}`}
                          name="dept"
                          type="radio"
                          value={item}
                          label={this.props.intl.formatMessage({
                            id: `DEPT_${item}`
                          })}
                        />
                      );
                    })}
                  </Grid>
                  <Grid item xs={6}>
                    {_.map(_.values(constants.depts), (item, index) => {
                      if (index % 2 === 0) return null;
                      return (
                        <Field
                          key={`radio-${item}`}
                          name="dept"
                          type="radio"
                          value={item}
                          label={this.props.intl.formatMessage({
                            id: `DEPT_${item}`
                          })}
                        />
                      );
                    })}
                  </Grid>
                  <Field
                    name="dept"
                    type="error"
                    className={this.props.classes.radioError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="title" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="country"
                    type="select"
                    native
                    options={this.countryOptions}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field name="salary" type="text" />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions classes={{ root: this.props.classes.actions }}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={this.props.onClose}
              >
                <FormattedMessage id="EDIT_EMPLOYEE_CANCEL" />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                <FormattedMessage id="EDIT_EMPLOYEE_SUBMIT" />
              </Button>
            </DialogActions>
          </Dialog>
        )}
      />
    );
  }

  async loadData(viewer) {
    await new Promise(resolve => setTimeout(resolve));

    this.setState({
      initialValues: {
        uid: parseInt(_.get(viewer, "employee.uid", "0")).toString(),
        checked: _.get(viewer, "employee.checked", false),
        name: _.get(viewer, "employee.name", ""),
        dept: _.get(viewer, "employee.dept", ""),
        title: _.get(viewer, "employee.title", ""),
        country: _.toLower(
          fromGlobalId(_.get(viewer, "employee.country.id", "")).id
        ),
        salary: _.get(viewer, "employee.salary", "").toString()
      }
    });
  }

  render() {
    if (!this.props.currentId) return this.renderForm();

    return (
      <QueryRenderer
        query={query}
        variables={{ currentId: this.props.currentId }}
        render={({ error, props }) => {
          if (error || !props) return null;
          if (this.state.initialValues) return this.renderForm();
          this.loadData(props.viewer);
          return null;
        }}
      />
    );
  }
}

export default EditEmployeeModal;
