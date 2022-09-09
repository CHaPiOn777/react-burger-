import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './feed.module.css';

export const Feed = () => {
  let inrgedients = useSelector(store => store.listIgredients.feed);
  const ingredientsLength = inrgedients.length;


    if (ingredientsLength >= 5) {
      inrgedients = inrgedients.slice(0, 6)
    } else {
      inrgedients = inrgedients
    }

  console.log(inrgedients)
  return (
    <section className={style.feed}>
      <h1 className='text text_type_main-large mt-10'>Лента заказов</h1>
      <ul className={`${style.orders}`}>
        <li className={`${style.order} p-6`}>
          <p className={`${style.orderNumber} text text_type_digits-default`}>#034535</p>
          <p className={`${style.orderTime} text text_type_main-small text_color_inactive`}>Сегодня, 16:20 i-GMT+3</p>
          <h2 className={`${style.nameBurger} text text_type_main-medium`}>Death Star Starship Main бургер</h2>
          <li className={style.listImg}>
            {ingredientsLength < 5 ?
              inrgedients.map((item) => {
                return (
                  <div className={style.border}>
                    <div className={style.item}>
                      <img className={style.img} src={item.image_mobile} alt={item.name} key={inrgedients._id} />
                    </div>
                  </div>
                )
              }) : 
              inrgedients.map((item) => {
                return (
                  <div className={style.border}>
                    <div className={style.item}>
                      <img className={style.img} src={item.image_mobile} alt={item.name} key={inrgedients._id} />
                    </div>
                  </div>
                )
              })}
              
          </li>
          <div className={`${style.price} ml-6`}>
            <p className={`${style.priceNumber} `}>480</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>

    </section>
  );
};
