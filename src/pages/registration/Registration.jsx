import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback } from 'react';
import style from './Registration.module.css';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { registerUser } from '../../components/utils/burger-api';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../services/action/registrationAction';

const Registration = () => {
  const inLogin = useSelector(store => store.authReducer.inLogin);
  const location = useLocation();

  const [name, setName] = React.useState('');
  const inputRef = React.useRef(null);
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();

  const onPasword = e => {
    setPassword(e.target.value);
  };

  const onEmail = e => {
    setEmail(e.target.value);
  };

  const onName = e => {
    setName(e.target.value);
  };

  const newUser = (e, email, password, name) => {
    e.preventDefault();
    dispatch(registerUserAction(email, password, name));
  };
  if (inLogin) {
    return (
    <Redirect to={location.state?.from || '/'} />
    );
  }
  return (
    <section className={style.container}>
      <h2 className={'text text_type_main-medium'}>Регистрация</h2>
      <form className={style.form}>
        <div className={`${style.wrapper} mt-6`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => { onName(e) }}
            icon={undefined}
            value={name}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={undefined}
            errorText={'Ошибка'}
            size={undefined}
          />
        </div>
        <div className={`${style.wrapper} mt-6`}>
          <EmailInput
            onChange={(e) => { onEmail(e) }}
            value={email}
            name={'email'}
            size={undefined} />
        </div>
        <div className={`${style.wrapper} mt-6 mb-6`} >
          <PasswordInput
            onChange={(e) => { onPasword(e) }}
            value={password}
            name={'password'}
            size={undefined} />
        </div>
        <Button type="primary" size="large" onClick={(e) => newUser(e, email, password, name)}>
          Зарегистрироваться
        </Button>
        <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
          Уже зарегистрированы?
          <Link to='/login' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
        </p>
      </form>
    </section>
  );
};

export default Registration;