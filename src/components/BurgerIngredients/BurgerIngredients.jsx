import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import CardIngredients from '../CardIngredients/CardIngredients';
import PropTypes from 'prop-types';



const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('one');
  const [state, setState] = React.useState({
    data: []
  });
  React.useEffect(() => {
    getElement()
  }, []);

  function getElement() {
    setState({ ...state })
    fetch(props.data)
      .then(res => res.json())
      .then(
        (result) => {
          setState(result);
        })
      .catch(e => {
        console.error(e)
      })
  }
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
          {state.data.map((card) => {
            if (card.type === 'bun') {
              return <CardIngredients card={card} key={card._id} active={props.active} setActive={props.setActive} setData={props.setCard} />
            }
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Соусы</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`} >
          {state.data.map((card) => {
            if (card.type === 'sauce') {
              return <CardIngredients card={card} key={card._id} active={props.active} setActive={props.setActive} setData={props.setCard} />
            }
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`}>Начинки</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {state.data.map((card) => {
            if (card.type === 'main') {
              return <CardIngredients card={card} key={card._id} active={props.active} setActive={props.setActive} setData={props.setCard} />
            }
          })}
        </div>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    data: PropTypes.string.isRequired,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    setData: PropTypes.func,
    key: PropTypes.string
  }),
}
export default BurgerIngredients;