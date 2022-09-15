import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IconIngredients } from '../../CardOrder/IconIngredients/IconIngredients';
import style from './OrderItemInfo.module.css';

export const OrderItemInfo = ({item}) => {
  return (

    <div className={`${style.consistItem}`} key={item?._id}>
      <div className={style.iconContainer}>
        <IconIngredients item={item} />
        <p className={'text text_type_main-small ml-4'}>{item?.name}</p>
      </div>
      <div className={`${style.price} mr-6`}>
        <p className={`${style.priceNumber} text text_type_digits-default`}>{item?.price}</p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};
