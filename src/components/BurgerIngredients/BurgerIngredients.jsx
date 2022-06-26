import React from 'react';

import {
  Tab,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import CardIngredients from '../CardIngredients/CardIngredients';

import {arr} from '../utils/data'

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one');
  return (
    <section className={stylesIngredients.section}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <nav>
        <ul className={stylesIngredients.list}>
          <li>

            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
          </li>
          <li>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
          </li>
          <li>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
            </Tab>
          </li>
        </ul>
      </nav>
      <div className={stylesIngredients.cards}>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Булки</h2>
        <div className={`${`${stylesIngredients.cardsItem} pl-4 pr-2`} pl-4 pr-2`}>
          {arr.map((card, index) => {
            if (card.type === 'bun') {
              return <CardIngredients props={card} key={index} />
            }
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Соусы</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {arr.map((card, index) => {
            if (card.type === 'sauce') {
              return <CardIngredients props={card} key={index} />
            }
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Начинки</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>

          {arr.map((card, index) => {
            if (card.type === 'main') {
              return <CardIngredients props={card} key={index} />
            }
          })}
        </div>
      </div>
    </section>
  )
}


export default BurgerIngredients;