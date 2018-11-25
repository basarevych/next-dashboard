import { connect } from "react-redux";
import { propTypes, reduxForm } from "redux-form/immutable";

const getImmutableFields = Form =>
  _.difference(_.keys(Form.propTypes), _.keys(propTypes));

const getBlurFields = Form =>
  _.transform(
    Form.fields,
    (acc, value, key) => {
      if (value.transform || value.validate) acc.push(key);
    },
    []
  );

export default (FormComponent, mapStateToProps, mapDispatchToProps) => {
  const Form = connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    reduxForm({
      form: FormComponent.formName,
      destroyOnUnmount: false,
      immutableProps: getImmutableFields(FormComponent),
      asyncBlurFields: getBlurFields(FormComponent),
      asyncChangeFields: [],
      onSubmit: FormComponent.onSubmit.bind(FormComponent),
      onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
      onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
      onChange: FormComponent.onChange.bind(FormComponent),
      asyncValidate: FormComponent.onValidate.bind(FormComponent)
    })(FormComponent)
  );
  Form.formName = FormComponent.formName;
  return Form;
};
