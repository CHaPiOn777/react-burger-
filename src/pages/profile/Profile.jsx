import { Button, EmailInput, Input, PasswordInput, ProfileIcon, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useEffect } from 'react';
import { changeUserInfo, getUserInfo, registerUser } from '../../components/utils/burger-api';
import style from './Profile.module.css'
import { Link, NavLink, useHistory, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../services/action/registrationAction';
import { changeUserInfoAction, logoutUserAction } from '../../services/action/authAction';
import { getCookie } from '../../components/utils/utils';

const Profile = () => {
  const user = useSelector(store => store.authReducer.user);
  const dispatch = useDispatch();
  let [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    email: user.email,
    name: user.name,
    password: ''
  });

  const token = getCookie('token');
  const history = useHistory();
  const location = useLocation();

  const nameRef = React.useRef(null);
  const loginRef = React.useRef(null);
  const passwordRef = React.useRef(null);


  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(changeUserInfoAction(form.email, form.name, form.password))
  }
  
  const onIconClick = (ref) => { ref.current.focus() };
  const onShowPassword = () => { setShowPassword (showPassword ? showPassword = false : showPassword = true) };

  const handleLogout = () => {
    dispatch(logoutUserAction());
  }
  const resetInfo = () => {
    setForm({
      email: user.email,
      name: user.name,
      password: ''
    })
  }

  return (
    <section className={style.container}>
      <nav className={style.navigation}>
        <ul className={`${style.ul} mb-20`}>
          <li className={`${style.list} `}>
            <NavLink
              to='/profile'
              className={`${style.link} text text_type_main-medium text_color_inactive`}
              activeClassName={style.activeLink}>
              Профиль
            </NavLink>
          </li>
          <li className={`${style.list} `}>
            <NavLink
              to='/profile/orders'
              className={`${style.link} text text_type_main-medium text_color_inactive`}
              activeClassName={style.activeLink}>
              История заказов
            </NavLink>
          </li>
          <li className={`${style.list} `}>
            <NavLink
              to='/login'
              className={`${style.link} text text_type_main-medium text_color_inactive`}
              activeClassName={style.activeLink}
              onClick={handleLogout}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
          В&nbsp;этом разделе вы&nbsp;можете изменить&nbsp; свои данные
        </p>
      </nav>
      <form className={style.form} onSubmit={e => onSubmit(e)}>
        <div className={`${style.wrapper}`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => { onChange(e) }}
            icon={'EditIcon'}
            value={form.name}
            name={'name'}
            error={false}
            ref={nameRef}
            onIconClick={() => onIconClick(nameRef)}
            errorText={'Ошибка'}
            size={undefined}
          />
        </div>
        <div className={`${style.wrapper} mt-6`}>
          <Input
            type={'email'}
            placeholder={'Логин'}
            onChange={(e) => { onChange(e) }}
            icon={'EditIcon'}
            value={form.email}
            name={'email'}
            error={false}
            ref={loginRef}
            onIconClick={() => onIconClick(loginRef)}
            errorText={'Ошибка'}
            size={undefined} />
        </div>
        <div className={`${style.wrapper} mt-6 mb-6`} >
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={'Пароль'}
            onChange={(e) => { onChange(e) }}
            icon={showPassword ? 'HideIcon' : 'ShowIcon'}
            value={form.password}
            name={'password'}
            error={false}
            ref={passwordRef}
            onIconClick={() => onShowPassword(passwordRef)}
            errorText={'Ошибка'}
            size={undefined}
          />
        </div>
        <div className={style.btns}>
          <Button type="secondary" size="large" onClick={resetInfo}>
            Отмена
          </Button>
          <Button type="primary" size="large" >
            Сохранить
          </Button>
        </div>
      </form>


    </section>
  );
};

export default Profile;