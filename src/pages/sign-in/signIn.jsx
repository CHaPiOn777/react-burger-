import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback } from 'react';
import style from './SignIn.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../services/action/authAction';
import { LoaderAuth } from '../../components/utils/Loader/Loader';

const SignIn = () => {
  const inLogin = useSelector(store => store.authReducer.inLogin);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  const onPasword = e => {
    setPassword(e.target.value);
  };
  const onEmail = e => {
    setEmail(e.target.value);
  };

  const login = useCallback((e) => {
    e.preventDefault();
    dispatch(authAction(email, password))
  }, [dispatch]);

  if (inLogin) {
    return (
      <Redirect to={location.state?.from || '/'} />
    )
  };

  return (
    <LoaderAuth>
      <section className={style.container}>
        <form className={style.form} onSubmit={login}>
          <h2 className={'text text_type_main-medium'}>Вход</h2>
          <div className={`${style.wrapper} mt-6`}>
            <EmailInput onChange={onEmail} value={email} name={'email'} size={"default"} />
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
            <Link to='/forgot-password' className={`${style.span} ml-2 text text_type_main-default`}>Восстановить пароль</Link>
          </p>
        </form>
      </section>
    </LoaderAuth>
  );
};

export default SignIn;