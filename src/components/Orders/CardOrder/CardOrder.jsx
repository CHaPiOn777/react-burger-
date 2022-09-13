import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { POPUP_ORDER_ITEM_INFO } from '../../../services/action/popupAction';
import style from './CardOrder.module.css'
import { IconIngredients, IconIngredientsHiden } from './IconIngredients/IconIngredients';

export const CardOrder = ({ order }) => {
  const ingredients = useSelector(store => store.listIgredients.feed);
  const location = useLocation();
  const dispatch = useDispatch();

  let ingredientsArr = [];
  let lastItem = [];
  let numberItems = null;
  
  const conformityIngredients = order.ingredients.map(item => ingredients.find(ingredient => ingredient._id === item));
  const priceOrder = conformityIngredients.reduce((sum, item) => +sum + item.price, []);

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

  const drawIconsItems = useCallback(() => {
    reduceItemsIngredients(conformityIngredients);
    return (
      <ul className={`${style.listImg} mt-6`}>
        {ingredientsArr.map((item, index) => {
          return (
            <IconIngredients item={item} key={index} />)
        })}

        {lastItem &&
          (
            <IconIngredientsHiden item={lastItem} numberItems={numberItems}  />
          )
        }
      </ul>
    )
  }, [order])

  const activeClass = () => {
    return order.status === 'done' ? 'text_color_success' : ''
  }
  
  return (
    order &&
    <Link to={{
      pathname: `/orders/${order._id}`,
      state: { background: location }
    }}
      status={order.status}
      onClick={() => dispatch({ type: POPUP_ORDER_ITEM_INFO })}
      className={style.link}>
      <li className={`${style.order} p-6 mr-2`}>
        <p className={`${style.orderNumber} text text_type_digits-default`}>{`#${order.number}`}</p>
        <p className={`${style.orderTime} text text_type_main-small text_color_inactive`}>{order.createdAt}</p>
        {order.status ? (
          <p className={`${activeClass()} text text_type_main-small mt-2`}>{order.status}</p>
        ) : ''}
        <h2 className={`${style.nameBurger} text text_type_main-medium mt-6`}>{order.name}</h2>
        {drawIconsItems()}
        <div className={`${style.price} mt-6 ml-6`}>
          <p className={`${style.priceNumber} text text_type_digits-default`}>{priceOrder}</p>
          <CurrencyIcon type="primary" />
        </div>
      </li>
    </Link>
  );
};
