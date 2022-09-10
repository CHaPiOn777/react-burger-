import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import style from './CardOrder.module.css'
export const CardOrder = ({children}) => {
  return (
    <li className={`${style.order} p-6`}>
      <p className={`${style.orderNumber} text text_type_digits-default`}>#034535</p>
      <p className={`${style.orderTime} text text_type_main-small text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
      <h2 className={`${style.nameBurger} text text_type_main-medium mt-6 mb-6`}>Death Star Starship Main бургер</h2>
      {children}
      <div className={`${style.price} ml-6`}>
        <p className={`${style.priceNumber} text text_type_digits-default`}>480</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
