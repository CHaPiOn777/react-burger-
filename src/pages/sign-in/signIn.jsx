import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import style from './SignIn.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from '../../components/utils/burger-api';
<<<<<<< HEAD
import { authAction, getUserAction } from '../../services/action/authAction';
=======
import { authAction } from '../../services/action/authAction';
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
import { getCookie, setCookie } from '../../components/utils/utils';
import Loader from '../../components/utils/Loader/Loader';

const SignIn = () => {
<<<<<<< HEAD
  const token = getCookie('token');
=======
  const cookie = getCookie('token');
  console.log(cookie)
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();
<<<<<<< HEAD
  const success = useSelector(store => store.authReducer.success);
  const authToken = useSelector(store => store.authReducer.authToken);
=======
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
  const onPasword = e => {
    setPassword(e.target.value);
  };
  const onEmail = e => {
    setEmail(e.target.value);

  };

  const login = (e, email, password) => {
    e.preventDefault();
    
    dispatch(authAction(email, password));
<<<<<<< HEAD
    dispatch(getUserAction())

  };

  if (token) {
    history.push("/");
  } 
=======
    // dispatch(getUserAction())

  };
  // if (cookie) {
  //   history.push("/");
  // } 
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
  return (
    <section className={style.container}>
      <form className={style.form}>
        <h2 className={'text text_type_main-medium'}>Вход</h2>
        <div className={`${style.wrapper} mt-6`}>
          <EmailInput onChange={onEmail} value={email} name={'email'} size={"default"} />
        </div>
        <div className={`${style.wrapper} mt-6 mb-6`} >
          <PasswordInput onChange={onPasword} value={password} name={'password'} size={"default"} />
        </div>
        <Button type="primary" size="large" onClick={(e) => login(e, email, password)}>
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
      </form>
    </section>
  );
};

export default SignIn;