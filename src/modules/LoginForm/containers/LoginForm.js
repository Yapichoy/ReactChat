import LoginForm from '../components/LoginForm';
import {withFormik} from "formik";
import validateForm from '../../../utils/validate';
export default  withFormik({
  validate: values => {
    let errors = {};
    const validate = validateForm({isAuth: true})
    Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]));
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);
  },
  displayName: "LoginForm"
})(LoginForm);