import RegisterForm from '../components/RegisterForm';
import {withFormik} from "formik";
import validateFn from '../../../utils/validate';
export default  withFormik({
  validate: values => {
    let errors = {};
    validateFn({isAuth: false, values, errors})
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);

  },
  displayName: "RegisterForm"
})(RegisterForm);