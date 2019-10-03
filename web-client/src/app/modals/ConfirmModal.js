import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
}));

function ConfirmModal(props) {
  const classes = useStyles(props);

  return (
    <Dialog maxWidth="xs" open onClose={props.onCancel}>
      <DialogTitle>
        <FormattedMessage id={props.title} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage id={props.text} values={props.values} />
        </DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: classes.actions }}>
        <Button variant="contained" color="primary" onClick={props.onCancel}>
          <FormattedMessage id={props.cancel} />
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onSubmit}>
          <FormattedMessage id={props.submit} />
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  values: PropTypes.object,
  cancel: PropTypes.string.isRequired,
  submit: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ConfirmModal;
