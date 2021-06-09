const validations = ({isAuth}) => ({
  email: (errors, value) => {
    if (!value.email) {
      errors.email = "Required";
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(value.email)) {
      errors.email = "Invalid email address";
    }
  },
  password: (errors, value) => {
    if (!value.password) {
      errors.password = "Required";
    }
  }
});


export default validations;
