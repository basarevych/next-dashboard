import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { fromGlobalId } from "graphql-relay";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { QueryRenderer } from "../app/providers/RelayProvider";
import { Form, Field, Status } from "../app/forms";
import constants from "../../common/constants";
import schema from "../../common/forms/employee";
import { countryOptions } from "../../common/src/countries";
import { employeesOperations, employeesSelectors } from "./state";
import ErrorMessage from "../app/errors/ErrorMessage";

const useStyles = makeStyles(theme => ({
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
}));

const query = graphql`
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

function EditEmployeeModal() {
  const intl = useIntl();
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentId = useSelector(state =>
    employeesSelectors.getEditModalEmployeeId(state)
  );

  const close = useCallback(
    () => dispatch(employeesOperations.hideEditModal()),
    [dispatch]
  );

  const submit = useCallback(
    async (
      { uid, checked, name, dept, title, country, salary },
      { setSubmitting, setErrors, setStatus }
    ) => {
      let result;
      if (currentId) {
        result = await dispatch(
          employeesOperations.edit({
            id: currentId,
            uid: parseInt(uid),
            checked: checked || false,
            name,
            dept,
            title,
            country,
            salary: parseInt(salary)
          })
        );
      } else {
        result = await dispatch(
          employeesOperations.create({
            uid: parseInt(uid),
            checked: checked || false,
            name,
            dept,
            title,
            country,
            salary: parseInt(salary)
          })
        );
      }
      if (result === true) {
        setSubmitting(false);
        dispatch(employeesOperations.hideEditModal());
      } else {
        let { _status, ...errors } = result;
        setSubmitting(false);
        setErrors(errors);
        setStatus(_status);
      }
    },
    [currentId, dispatch]
  );

  const renderForm = useCallback(
    ({ isSubmitting, status, handleSubmit }) => (
      <Dialog maxWidth="xs" open onClose={close}>
        <DialogTitle>
          <FormattedMessage
            id={
              currentId
                ? "EDIT_EMPLOYEE_TITLE_EDIT"
                : "EDIT_EMPLOYEE_TITLE_CREATE"
            }
          />
        </DialogTitle>
        <Status error={status} classes={classes} />
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
                {Object.values(constants.depts).map((item, index) => {
                  if (index % 2 !== 0) return null;
                  return (
                    <Field
                      key={`radio-${item}`}
                      name="dept"
                      type="radio"
                      value={item}
                      label={intl.formatMessage({
                        id: `DEPT_${item}`
                      })}
                    />
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                {Object.values(constants.depts).map((item, index) => {
                  if (index % 2 === 0) return null;
                  return (
                    <Field
                      key={`radio-${item}`}
                      name="dept"
                      type="radio"
                      value={item}
                      label={intl.formatMessage({
                        id: `DEPT_${item}`
                      })}
                    />
                  );
                })}
              </Grid>
              <Field name="dept" type="error" className={classes.radioError} />
            </Grid>
            <Grid item xs={12}>
              <Field name="title" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="country"
                type="select"
                native
                options={countryOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <Field name="salary" type="text" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: classes.actions }}>
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={close}
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
    ),
    [classes, close]
  );

  const getForm = initialValues => (
    <Form
      schema={schema}
      onSubmit={submit}
      initialValues={initialValues}
      render={renderForm}
    />
  );

  const renderQuery = useCallback(({ error, props: renderProps }) => {
    if (error) return <ErrorMessage error={error} />;

    if (renderProps && renderProps.viewer) {
      const employee = (renderProps.viewer || {}).employee;
      if (employee) {
        return getForm({
          ...employee,
          country: fromGlobalId(employee.country.id).id.toLowerCase()
        });
      }
    }

    return null;
  });

  if (!currentId) return getForm();

  return (
    <QueryRenderer
      query={query}
      variables={{ currentId }}
      render={renderQuery}
    />
  );
}

export default EditEmployeeModal;
