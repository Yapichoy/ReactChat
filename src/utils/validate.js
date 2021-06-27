export default ({isAuth, values, errors}) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Required";
      } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(value)) {
        errors.email = "Invalid email address";
      }
    },
    password: (value) => {
      if (!isAuth) {
        if (!value) {
          errors.password = "Required";
        } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/.test(value)) {
          errors.password =  "Слишком лёгкий пароль";
        }
      }
    }
  }
  Object.keys(values).forEach(
      key => rules[key] && rules[key](values[key])
  );
};
