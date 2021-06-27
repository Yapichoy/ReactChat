import LoginForm from '../components/LoginForm';
import {withFormik} from "formik";
import validateForm from '../../../utils/validate';
export default  withFormik({
    enaibleReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validate: values => {
    let errors = {};
    validateForm({isAuth: true, values, errors})
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    console.log(values);
  },
  displayName: "LoginForm"
})(LoginForm);