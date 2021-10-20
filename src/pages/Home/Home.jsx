import React from 'react';
import './home.sass';

import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../redux/actions/authAction';

export default function Home() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  function onChangeLogin(e) {
    setLogin(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onLogin() {
    dispatch(setUsername(login));
  }

  useEffect(() => {
    if (login === 'developer21' && password === '123456') {
      setValid(true);
    }
  }, [login, password]);

  return (
    <div className='home'>
      <div class='container'>
        <Form
          name='basic'
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}>
          <Form.Item
            label='Логин'
            name='login'
            rules={[
              {
                required: true,
                message: 'Необходимо ввести логин',
              },
            ]}>
            <Input placeholder='Введите ваш логин' onChange={onChangeLogin} />
          </Form.Item>
          <Form.Item
            label='Пароль'
            className='main__label'
            name='password'
            rules={[
              {
                required: true,
                message: 'Необходимо ввести пароль',
              },
            ]}>
            <Input.Password
              placeholder='Введите ваш пароль'
              onChange={onChangePassword}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7, span: 10 }}>
            <NavLink to='/profile'>
              <Button
                type='primary'
                htmlType='submit'
                disabled={!valid}
                onClick={onLogin}>
                Войти
              </Button>
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
