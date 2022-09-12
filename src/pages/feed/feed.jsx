import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CardOrder } from '../../components/Orders/CardOrder/CardOrder';
import { Orders } from '../../components/Orders/Orders';
import { Stats } from '../../components/Stats/Stats';
import style from './feed.module.css';

export const Feed = () => {
  

  return (
    <section className={style.feed}>
      <h1 className='text text_type_main-large mt-10 mb-5 '>Лента заказов</h1>
      <div className={`${style.orders} `}>
        <Orders />
        <Stats/>
      </div>
    </section>
  );
};
