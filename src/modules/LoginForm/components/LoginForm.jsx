import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from "../../../components";
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
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
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
              {
                email: true,
                message: 'Please true Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} type='email' placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
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