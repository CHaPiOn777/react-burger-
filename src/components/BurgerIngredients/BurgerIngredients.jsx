import React from 'react';

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,

} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import stylesCardIngredients from './CardIngredients.module.css';
import arr from '../utils/data'

const BurgerIngredients = () => {
  return (
    <section className={stylesIngredients.section}>
      <h1 className={stylesIngredients.title}>Соберите бургер</h1>
      <nav>
        <ul className={stylesIngredients.list}>
          <li>
            <a href="#" className={stylesIngredients.link}>Булки</a>
          </li>
          <li>
            <a href="#" className={stylesIngredients.link}>Соусы</a>
          </li>
          <li>
            <a href="#" className={stylesIngredients.link}>Начинки</a>
          </li>
        </ul>
      </nav>
      <div className={stylesIngredients.cards}>
        <h2 className={stylesIngredients.filling}>Булки</h2>
        {arr.map((card) => {
          return <CardIngredients props={card} />
        })}
      </div>
    </section>
  )
}

const CardIngredients = ({ props }) => {
  return (
    <div className={stylesCardIngredients.card}>
      <img src={props.image} alt="" className={stylesCardIngredients.img} />
      <p className={stylesCardIngredients.price}>{props.price}</p>
      <p className={stylesCardIngredients.name}>{props.name}</p>
    </div>
  )
}
export default BurgerIngredients;