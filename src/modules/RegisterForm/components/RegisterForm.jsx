import {Form, Input} from "antd";
import {useState} from 'react';
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import {Link} from 'react-router-dom';
import {validateField} from "../../../utils/helpers/indwx";

const RegisterForm = ({values, touched, errors, isSubmitting,handleChange, handleBlur, handleSubmit, handleReset, dirty}) => {
  let [success, setSuccess] = useState(false);
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block className=''>

        {success &&
        <div className='auth__success-block'>
          <div><InfoCircleTwoTone /></div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
        </div>
        }
        {!success &&
        <div>
          <Form
            name="normal_login"
            className="login-form"
            onSubmit={handleSubmit}
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
              name="user"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Ваше имя"/>
            </Form.Item>
            <Form.Item
              name="password"
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
            <Form.Item
              name="confirm-password"
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
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType="submit" size="large">Зарегистрироваться</Button>
            </Form.Item>
            <Link to="/login" className="auth__register-link">Войти в аккаунт</Link>
          </Form>
        </div>}
      </Block>
    </div>
  )
}

export default RegisterForm;