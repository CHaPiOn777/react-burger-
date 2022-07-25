import React, { useContext, useMemo, useEffect } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import CardIngredients from '../CardIngredients/CardIngredients';
import PropTypes from 'prop-types';
import { IngredientsContext } from '../utils/IngredientsContext';
import { useDispatch, useSelector } from 'react-redux';
import { listIgredientsReducer } from '../../services/reducers/listIgredientsReducer';
import { getIngredients } from '../utils/burger-api';
import { getElement} from '../../services/action/listIgredientsAction';

const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('one');
  const state = useSelector(store => store.listIgredients.feed);


  const bun = useMemo(() => state.filter((item) => item.type === 'bun'), [state]);
  const sauce = useMemo(() => state.filter((item) => item.type === 'sauce'), [state]);
  const main = useMemo(() => state.filter((item) => item.type === 'main'), [state]);

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
          {bun.map((card) => {
            return <CardIngredients
              card={card}
              key={card._id}
              active={props.active}
              setActive={props.setActive}
              setData={props.setCard} />
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Соусы</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`} >
          {sauce.map((card) => {
            return <CardIngredients
              card={card}
              key={card._id}
              active={props.active}
              setActive={props.setActive}
              setData={props.setCard} />
          }
          )}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Начинки</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {main.map((card) => {
            return <CardIngredients
              card={card}
              key={card._id}
              active={props.active}
              setActive={props.setActive}
              setData={props.setCard} />
          })}
        </div>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  state: PropTypes.object,
  active: PropTypes.bool,
  setActive: PropTypes.func,
  setState: PropTypes.func,
  key: PropTypes.string
}
export default BurgerIngredients;