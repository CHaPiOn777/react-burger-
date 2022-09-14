import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IconIngredients } from '../CardOrder/IconIngredients/IconIngredients';
import style from './OrderInfo.module.css'
import { OrderItemInfo } from './OrderItemInfo/OrderItemInfo';

export const OrderInfo = () => {
  const { id } = useParams();
  const order = useSelector(store => store.popupDetailsReducer.item[0]);

  // const orderId = order.find(order => order._id === id);

  const activeClass = () => {
    return order.status === 'done' ? 'text_color_success' : ''
  }
  return (
  
    <div className={style.orderInfo}>
      <p className={`${style.orderNumber} text text_type_digits-default`}>{`#${order.number}`}</p>
      <h2 className={`${style.nameIngredient} text text_type_main-medium mt-10`}>{order.name}</h2>
      <p className={`${activeClass()} text text_type_main-small mt-3`}>dsgjkyty</p>
      <h3 className={`${style.consistTitle} text text_type_main-medium mt-15`}>Состав:</h3>
      <ul className={`${style.listOrderInfo} mt-6`}>
        {order.ingredients.map((item, index) => {
          return (
            <OrderItemInfo item={item} key={index} />
          )
        })}
      </ul>
      <div className={`${style.data} mt-10`}>
        <p className="text text_type_main-small text_color_inactive">Вчера, 13:50 i-GMT+3</p>
        <div className={`${style.price}`}>
          <p className={`${style.priceNumber} text text_type_digits-default`}>510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
