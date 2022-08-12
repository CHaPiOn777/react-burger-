import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import style from './Registration.module.css';
import { Link, useHistory } from 'react-router-dom';

const Registration = () => {
  const history = useHistory();
  console.log(history)
  const [password, setPassword] = React.useState('')
  const onPasword = e => {
    setPassword(e.target.value)
  }
  const [email, setEmail] = React.useState('')
  const onEmail = e => {
    setEmail(e.target.value)
  }
  const [name, setName] = React.useState('value')
  const inputRef = React.useRef(null)
  const onName = e => {
    setName(e.target.value)
  }
  
  return (
    <section className={style.container}>
      <h2 className={'text text_type_main-medium'}>Регистрация</h2>
      <div className={`${style.email} mt-6`}>
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
      <div className={`${style.email} mt-6`}>
        <EmailInput onChange={(e) => { onEmail(e) }} value={email} name={'email'} size={'default'} />
      </div>
      <div className={`${style.password} mt-6 mb-6`} >
        <PasswordInput onChange={(e) => { onPasword(e) }} value={password} name={'password'} size={"default"} />
      </div>
      <Button type="primary" size="large">
        Зарегистрироваться
      </Button>
      <p className={`${style.info} mt-20 text text_type_main-default text_color_inactive`} >
        Уже зарегистрированы?
        <Link to='/' className={`${style.span} ml-2 text text_type_main-default`}>Войти</Link>
      </p>

    </section>
  );
};

export default Registration;