import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import style from './SignIn.module.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [password, setPassword] = React.useState('')
  const onPasword = e => {
    setPassword(e.target.password)
  }
  const [email, setEmail] = React.useState('')
  const onEmail = e => {
    setEmail(e.target.email)
  }
  return (
    <section className={style.container}>
      <h2 className={'text text_type_main-medium'}>Вход</h2>
      <div className={`${style.wrapper} mt-6`}>
        <EmailInput onChange={onEmail} value={email} name={'email'} />
      </div>
      <div className={`${style.wrapper} mt-6 mb-6`} >
        <PasswordInput onChange={onPasword} value={password} name={'password'} size={"default"} />
      </div>
      <Button type="primary" size="large">
        Войти
      </Button>
      <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
        Вы — новый пользователь?
        <Link to='/register' className={`${style.span} ml-2 text text_type_main-default`}>Зарегистрироваться</Link>
      </p>
      <p className={`${style.info} mt-4 text text_type_main-default text_color_inactive`} >
        Забыли пароль?
        <span className={`${style.span}`}>
        <Link to='/forgot-password' className={`${style.span} ml-2 text text_type_main-default`}>Восстановить пароль</Link>
        </span>
      </p>
    </section>
  );
};

export default SignIn;