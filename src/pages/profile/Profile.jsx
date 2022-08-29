import { Button, EmailInput, Input, PasswordInput, ProfileIcon, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { getUserInfo, registerUser } from '../../components/utils/burger-api';
import style from './Profile.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../services/action/registrationAction';
<<<<<<< HEAD
import { logoutUserAction } from '../../services/action/authAction';

const Profile = () => {
  const user = useSelector(store => store.authReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
=======
import { setUserAction } from '../../services/action/setUserAction';

const Profile = () => {
  const user = useSelector(store => store.getUserDispatch.user);
  const newUser = useSelector(store => store.setUserDispatch.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserAction();
  }, [dispatch])
  const [name, setName] = React.useState(`${user.name}`);
  const [email, setEmail] = React.useState(`${user.email}`);
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
  const [password, setPassword] = React.useState('');
  const nameRef = React.useRef(null);
  const loginRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const onPasword = e => {setPassword(e.target.value)};
  const onEmail = e => {setEmail(e.target.value)};
  const onName = e => {setName(e.target.value)};

  const onIconClick = (ref) => {ref.current.focus()};

<<<<<<< HEAD
  const handleLogout = () => {
    dispatch(logoutUserAction());
=======
  const saveUser = (e) => {
    e.preventDefault();
    
    dispatch(setUserAction(name, email, password));
    // if(newUser) {
    //   setName(newUser.name);
    //   setEmail(newUser.email);
    //   setPassword()
    //   console.log(newUser)
    // }

>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
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
<<<<<<< HEAD
      <form className={style.form}>
=======
      <form className={style.form} onSubmit={e => saveUser(e)}>
>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
        <div className={`${style.wrapper}`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => { onName(e) }}
            icon={'EditIcon'}
            value={name}
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
            onChange={(e) => { onEmail(e) }}
            icon={'EditIcon'}
            value={email}
            name={'email'}
            error={false}
            ref={loginRef}
            onIconClick={() => onIconClick(loginRef)}
            errorText={'Ошибка'}
            size={undefined} />
        </div>
        <div className={`${style.wrapper} mt-6 mb-6`} >
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={(e) => { onPasword(e) }}
            icon={'EditIcon'}
            value={password}
            name={'password'}
            error={false}
            ref={passwordRef}
            onIconClick={() => onIconClick(passwordRef)}
            errorText={'Ошибка'}
            size={undefined}
          />
        </div>
        <div className={style.btns}>
          <Button type="secondary" size="large">
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