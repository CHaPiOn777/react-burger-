import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback } from 'react';
import style from './ForgotPassword.module.css';
import { Link, useHistory } from 'react-router-dom';
import { resetPasswordEmail } from '../../components/utils/burger-api';

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState('')
  const emailRef = React.useRef(null)
  const onEmail = e => {
    setEmail(e.target.value)
  }
  const resetPassword = useCallback(
    () => {
      history.replace({ pathname: '/reset-password' })
    },
    [history]
  );

  const addEmail = (e, email) => {
    resetPasswordEmail(email)
      .then(res => res.success ? resetPassword() : console.log(res))
      .catch(err => console.error(err))
  }
  return (
    <section className={style.container}>
      <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
      <div className={`${style.email} mt-6 mb-6`}>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={(e) => { onEmail(e) }}
          icon={undefined}
          value={email}
          name={'Email'}
          error={false}
          ref={emailRef}
          onIconClick={undefined}
          errorText={'Ошибка'}
          size={undefined}
        />
      </div>
      <Button type="primary" size="large" onClick={(e) => { addEmail(e, email) }}>
        Восстановить
      </Button>
      <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
        Вспомнили пароль?
        <Link to='/' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
      </p>

    </section>
  );
};

export default ForgotPassword;