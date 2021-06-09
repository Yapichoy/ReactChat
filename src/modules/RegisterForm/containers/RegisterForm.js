import RegisterForm from '../components/RegisterForm';
import {withFormik} from "formik";
import validateFn from '../../../utils/validate';
export default  withFormik({
  validate: values => {
    let errors = {};
    const validate = validateFn({isAuth: false})
    Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]));
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);
  },
  displayName: "RegisterForm"
})(RegisterForm);