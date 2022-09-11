import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './CardOrder.module.css'
import { IconIngredients, IconIngredientsHiden } from './IconIngredients/IconIngredients';
export const CardOrder = ({children, status }) => {
  const inrgedients = useSelector(store => store.listIgredients.feed);
  let ingredientsArr = [];
  let lastItem = [];
  let numberItems = null;


  const reduceItemsIngredients = (arr) => {
    if (arr.length > 5) {
      ingredientsArr = arr.slice(0, 5);
      lastItem = arr.slice(-1);
      numberItems = arr.length - 5;
    } else {
      ingredientsArr = arr;
      lastItem = null;
      numberItems = null;
    }
  }
  const drawIconsItems = (arr) => {
    reduceItemsIngredients(arr);
    return (
      <div className={`${style.listImg} mt-6`}>
        {ingredientsArr.map(item => {
          return (
            <IconIngredients item={item} key={item._id} />)
        })}
        {lastItem &&
          <IconIngredientsHiden item={lastItem} numberItems={numberItems} key={lastItem._id} />
        }
      </div>
    )
  }
  const activeClass = () => {
    return status === 'Выполнен' ? 'text_color_success' : ''
  }
  return (
    <li className={`${style.order} p-6 mr-2`}>
      <p className={`${style.orderNumber} text text_type_digits-default`}>#034535</p>
      <p className={`${style.orderTime} text text_type_main-small text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
      {status ? (
        <p className={`${activeClass()} text text_type_main-small mt-2`}>{status}</p>
      ) : ''}
      <h2 className={`${style.nameBurger} text text_type_main-medium mt-6`}>Death Star Starship Main бургер</h2>
      {drawIconsItems(inrgedients)}
      <div className={`${style.price} mt-6 ml-6`}>
        <p className={`${style.priceNumber} text text_type_digits-default`}>480</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};
