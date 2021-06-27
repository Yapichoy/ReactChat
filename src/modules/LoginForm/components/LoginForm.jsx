import {Form, Input} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import { Link } from 'react-router-dom';
import {validateField} from "../../../utils/helpers/indwx";

const LoginForm = ({values, touched, errors, isSubmitting,handleChange, handleBlur, handleSubmit, handleReset, dirty}) => {
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block className=''>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
            <Form.Item
                name="email"
                hasFeedback
                validateStatus={validateField('email', touched, errors)}
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваш email!',
                    }, {email: true, message: 'This email'},
                ]}
            >
                <Input prefix={<MailOutlined/>} name='email' value={values.email} placeholder="E-mail" onChange={handleChange} onBlur={handleBlur}/>
            </Form.Item>
            <Form.Item
                name="password"
                hasFeedback
                validateStatus={validateField('password', touched, errors)}
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" size="large">Войти в аккаунт</Button>
          </Form.Item>
          <Link to="/registration" className="auth__register-link">Зарегистрироваться</Link>
        </Form>
      </Block>
    </div>
  )
}

export default  LoginForm;