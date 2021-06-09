import './Auth.scss';
import RegisterForm from "../../modules/RegisterForm";
import {Route} from "react-router-dom";
import LoginForm from "../../modules/LoginForm";

const Auth = () => {

  return <section className="auth">
    <div className="auth__content">
      <Route exact path={['/login', '/']} component={LoginForm} />
      <Route exact path='/registration' component={RegisterForm} />
    </div>
  </section>

}

export default Auth;