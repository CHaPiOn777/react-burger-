import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback } from 'react';
import style from './ResetPassword.module.css';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { resetPassword } from '../../components/utils/burger-api';
import { useSelector } from 'react-redux';

const ResetPassword = () => {
  const inLogin = useSelector(store => store.authReducer.inLogin);
  const location = useLocation();
  const history = useHistory();
  console.log(history)

  const [password, setPassword] = React.useState('')
  const passwordRef = React.useRef(null)
  const onPassword = e => {
    setPassword(e.target.value)
  }
  const onIconPasswordClick = () => {
    setTimeout(() => passwordRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const [code, setCode] = React.useState('')
  const codeRef = React.useRef(null)
  const onCode = e => {
    setCode(e.target.value)
  }
  const newPassword = (e, password, code) => {
    resetPassword(password, code)
      .then(res => console.log(res))
      .catch(err => console.error(err))
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
          error={false}
          ref={passwordRef}
          onIconClick={onIconPasswordClick}
          errorText={'Ошибка'}
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
          error={false}
          ref={codeRef}
          onIconClick={undefined}
          errorText={'Ошибка'}
          size={undefined}
        />
      </div>
      <Button type="primary" size="large" onClick={(e) => {newPassword(password, code)}}>
        Сохранить
      </Button>
      <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
        Вспомнили пароль?
        <Link to='/' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
      </p>

    </section>
  );
};

export default ResetPassword;