import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useEffect } from 'react';
import style from './ResetPassword.module.css';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { resetPassword } from '../../components/utils/burger-api';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordAction } from '../../services/action/authAction';

const ResetPassword = () => {
  const inLogin = useSelector(store => store.authReducer.inLogin);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const messageErr = useSelector(store => store.authReducer.message);
  const succesReset = useSelector(store => store.authReducer.success);
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const passwordRef = React.useRef(null);
  const codeRef = React.useRef(null)


  const onIconPasswordClick = () => {
    setTimeout(() => passwordRef.current.focus(), 0);
  }

  const onPassword = e => {
    setPassword(e.target.value);
  }
  const onCode = e => {
    setCode(e.target.value)
  }
  console.log(password, code)
  const newPassword = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAction(password, code))
  }
  
  if (inLogin) {
    return (
    <Redirect to={location.state?.from || '/'} />
    );
  } else if (succesReset) {
    return (
      <Redirect to={'/login'} />
      );
  }

  return (
    <section className={style.container}>
      <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
      <div className={`${style.wrapper} mt-6`}>
        <Input
          type={'password'}
          placeholder={'Введите новый пароль'}
          onChange={(e) => { onPassword(e) }}
          icon={'ShowIcon'}
          value={password}
          name={'password'}
          error={messageErr ? true : false}
          ref={passwordRef}
          onIconClick={onIconPasswordClick}
          errorText={messageErr}
          size={undefined}
        />
      </div>
      <div className={`${style.wrapper} mt-6 mb-6`}>
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => { onCode(e) }}
          icon={undefined}
          value={code}
          name={'code'}
          error={messageErr ? true : false}
          ref={codeRef}
          onIconClick={undefined}
          errorText={messageErr}
          size={undefined}
        />
      </div>
      <Button type="primary" size="large" onClick={(e) => {newPassword(e)}}>
        Сохранить
      </Button>
      <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
        Вспомнили пароль?
        <Link to='/login' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
      </p>

    </section>
  );
};

export default ResetPassword;