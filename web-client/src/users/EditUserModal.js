import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { QueryRenderer } from "../app/providers/RelayProvider";
import { Form, Field, Status } from "../app/forms";
import createSchema from "../../common/forms/createUser";
import editSchema from "../../common/forms/editUser";
import { usersOperations, usersSelectors } from "./state";
import ErrorMessage from "../app/errors/ErrorMessage";
import constants from "../../common/constants";

const useStyles = makeStyles(theme => ({
  error: {
    color: theme.palette.error.main
  },
  radioError: {
    marginLeft: 16,
    borderTop: `2px solid ${theme.palette.error.main}`
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
}));

const query = graphql`
  query EditUserModalQuery($currentId: ID) {
    viewer {
      user(id: $currentId) {
        id
        email
        name
        roles
      }
    }
  }
`;

function EditUserModal() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentId = useSelector(usersSelectors.getEditModalUserId);

  const close = useCallback(
    () => dispatch(usersOperations.hideEditModal()),
    []
  );

  const submit = useCallback(
    async (
      { email, name, password, isAdmin },
      { setSubmitting, setErrors, setStatus }
    ) => {
      let result;
      if (currentId) {
        result = await dispatch(
          usersOperations.edit({
            id: currentId,
            email,
            name,
            password,
            isAdmin
          })
        );
      } else {
        result = await dispatch(
          usersOperations.create({
            email,
            name,
            password,
            isAdmin
          })
        );
      }
      if (result === true) {
        setSubmitting(false);
        dispatch(usersOperations.hideEditModal());
      } else {
        let { _status, ...errors } = result;
        setSubmitting(false);
        setErrors(errors);
        setStatus(_status);
      }
    },
    [currentId]
  );

  const renderForm = useCallback(
    ({ isSubmitting, status, handleSubmit }) => (
      <Dialog maxWidth="xs" open onClose={close}>
        <DialogTitle>
          <FormattedMessage
            id={currentId ? "EDIT_USER_TITLE_EDIT" : "EDIT_USER_TITLE_CREATE"}
          />
        </DialogTitle>
        <Status error={status} classes={classes} />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field name="email" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Field name="name" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Field name="isAdmin" type="checkbox" />
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
            <FormattedMessage id="EDIT_USER_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            <FormattedMessage id="EDIT_USER_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    ),
    [classes]
  );

  const getForm = (schema, initialValues) => (
    <Form schema={schema} onSubmit={submit} initialValues={initialValues}>
      {renderForm}
    </Form>
  );

  const renderQuery = useCallback(({ error, props: renderProps }) => {
    if (error) return <ErrorMessage error={error} />;

    if (renderProps && renderProps.viewer) {
      const user = (renderProps.viewer || {}).user;
      if (user) {
        return getForm(editSchema, {
          ...user,
          isAdmin: user.roles.includes(constants.roles.ADMIN)
        });
      }
    }

    return null;
  }, []);

  if (!currentId) return getForm(createSchema);

  return (
    <QueryRenderer
      query={query}
      variables={{ currentId }}
      render={renderQuery}
    />
  );
}

export default EditUserModal;
