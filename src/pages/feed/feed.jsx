import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CardOrder } from '../../components/CardOrder/CardOrder';
import { IconIngredients, IconIngredientsHiden } from '../../components/IconIngredients/IconIngredients';
import style from './feed.module.css';

export const Feed = () => {
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
      <div className={style.listImg}>
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

  return (
    <section className={style.feed}>
      <h1 className='text text_type_main-large mt-10'>Лента заказов</h1>
      <ul className={`${style.orders}`}>

        <CardOrder >
          {drawIconsItems(inrgedients)}
        </CardOrder>
        <CardOrder >
          {drawIconsItems(inrgedients)}
        </CardOrder>
        <CardOrder >
          {drawIconsItems(inrgedients)}
        </CardOrder>
        <CardOrder >
          {drawIconsItems(inrgedients)}
        </CardOrder>
      </ul>

    </section>
  );
};
