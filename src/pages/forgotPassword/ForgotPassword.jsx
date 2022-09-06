import { Button, Input, } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback } from 'react';
import style from './ForgotPassword.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordEmailAction } from '../../services/action/authAction';
import { LoaderAuth } from '../../components/utils/Loader/Loader';

const ForgotPassword = () => {
  const resetEmailSuccess = useSelector(store => store.authReducer.resetEmailSuccess);
  const inLogin = useSelector(store => store.authReducer.inLogin);
  const [email, setEmail] = React.useState('')
  const emailRef = React.useRef(null)
  const location = useLocation();
  const dispatch = useDispatch();

  const onEmail = e => {
    setEmail(e.target.value);
  }

  const addEmail = useCallback(() => {
    dispatch(resetPasswordEmailAction(email));
  }, [dispatch])

  if (inLogin) {
    return (
      <Redirect to={location.state?.from || '/'} />
    );
  }
  return (
    <LoaderAuth>
      <section className={style.container}>
        <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
        <div className={`${style.wrapper} mt-6 mb-6`}>
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
        <Button type="primary" size="large" onClick={(e) => { addEmail() }}>
          {resetEmailSuccess ?
            (<Redirect to='/reset-password' />)
            : ''
          }
          Восстановить
        </Button>
        <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
          Вспомнили пароль?
          <Link to='/login' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
        </p>

      </section>
    </LoaderAuth>
  );
};

export default ForgotPassword;