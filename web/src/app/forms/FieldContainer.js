import { injectIntl } from "react-intl";
import { connect } from "formik";
import FieldComponent from "./Field";

const Field = injectIntl(connect(FieldComponent));

export default Field;
