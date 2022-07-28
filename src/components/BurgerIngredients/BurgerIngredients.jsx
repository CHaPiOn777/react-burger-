import React, { useContext, useMemo, useEffect, useRef } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import CardIngredients from './CardIngredients/CardIngredients';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import { stringify as uuidStringify } from 'uuid';


const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('one');
  const state = useSelector(store => store.listIgredients.feed);
  const count = Number;

  const bun = useMemo(() => state.filter((item) => item.type === 'bun'), [state]);
  const sauce = useMemo(() => state.filter((item) => item.type === 'sauce'), [state]);
  const main = useMemo(() => state.filter((item) => item.type === 'main'), [state]);

  const tabRef = useRef(current);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const scrollMenu = () => {
    if (bunRef.current.getBoundingClientRect().top >= 0) {
      setCurrent('one')
    } else if (sauceRef.current.getBoundingClientRect().top >= 0) {
      setCurrent('two')
    } else {
      setCurrent('three')
    }
  }

  useEffect(() => {
    tabRef.current.addEventListener('scroll', scrollMenu)
  }, [])

  const buttonHandler = (ref) => {
    ref.current.scrollIntoView();
  }

  return (
    <section className={stylesIngredients.section}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <nav>
        <ul className={stylesIngredients.list} >
          <li>
            <Tab value="one" active={current === 'one'} onClick={() => { buttonHandler(bunRef); setCurrent() }}>
              Булки
            </Tab>
          </li>
          <li>
            <Tab value="two" active={current === 'two'} onClick={() => { buttonHandler(sauceRef); setCurrent() }}>
              Соусы
            </Tab>
          </li>
          <li>
            <Tab value="three" active={current === 'three'} onClick={() => { buttonHandler(mainRef); setCurrent() }}>
              Начинки
            </Tab>
          </li>
        </ul>
      </nav>
      <div className={stylesIngredients.cards} ref={tabRef} >
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={bunRef}>Булки</h2>
        <div className={`${`${stylesIngredients.cardsItem} pl-4 pr-2`} pl-4 pr-2`} >
          {bun.map((card) => {

            return <CardIngredients
              count={count}
              card={card}
              item={card._id}
              key={card._id}
              active={props.active}
              setActive={props.setActive}
              setData={props.setCard} />
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={sauceRef}>Соусы</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {sauce.map((card) => {
            return <CardIngredients
              count={count}
              card={card}
              key={card._id}
              active={props.active}
              setActive={props.setActive}
              setData={props.setCard} />
          }
          )}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={mainRef}>Начинки</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {main.map((card) => {
            return <CardIngredients
              count={count}
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