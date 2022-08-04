import { useEffect, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesConstructor from './BurgerConstructor.module.css';
import { IngredientsContext } from '../utils/IngredientsContext';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { DELETE_ITEM, ADD_INGREDIENT, CHANGE_ITEM } from '../../services/action/dropAction';
import { COUNT } from '../../services/action/listIgredientsAction';
import { BurgerConstructorItem } from './BurgerConstrucntorItem/BurgerConstructorItem';
import { isTemplateMiddle } from 'typescript';


const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.listIgredients.feed);
  const ingredients = useSelector(store => store.dropReducer.feed);
  const bun = useSelector(store => store.dropReducer.bun);
  const [total, setTotal] = useState(0);
  const [{ isCount }, dropTarget] = useDrop({

    accept: 'ingredients',
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT,
        data: { ...item, id: Date.now()}
      })
    },
  })


  let burgerId = useMemo(() => state.map((item) => item._id), [state]);
  const filling = useMemo(() => state.filter((item) => item.type !== 'bun'), [state]);
  const bunFilter = useMemo(() => state.find((item) => item.type === 'bun'), [state]);

  useEffect(() => {
    const totalPrice = filling.reduce((sum, item) => sum + item.price, bunFilter ? (bunFilter.price * 2) : 0)
    setTotal(totalPrice)
  }, [bunFilter, filling])

  return (
    <section className={`${stylesConstructor.constructor} mt-25 ml-10`} ref={dropTarget}>
      <div className={`${stylesConstructor.ingredient} ml-8`}>
        {bun.length !== 0
          ? <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun[0].card.name} (вверх)`}
            price={bun[0].card.price}
            thumbnail={bun[0].card.image}
          />
          : <p className={`${stylesConstructor.bun}`}>Выберите булочку для бургера</p>}
      </div>
      <div className={`${stylesConstructor.topings}`}>
        {ingredients.map((item, index) => {
          return <BurgerConstructorItem
            key={item.id}
            id={item.id}
            type={item.card.type}
            name={item.card.name}
            price={item.card.price}
            image={item.card.image}
            index={index} />
        })}

      </div>
      <div className={`${stylesConstructor.ingredient} ml-8`}>
        {bun.length !== 0 && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun[0].card.name} (низ)`}
          price={bun[0].card.price}
          thumbnail={bun[0].card.image}
        />}
      </div>
      <div className={`${stylesConstructor.order} mt-6`}>
        <p className={`text text_type_digits-medium`}>
          {total}
          <span className='ml-2'><CurrencyIcon type="primary" /></span>
        </p>
        <Button type="primary" size="large" onClick={() => {
          props.setActive(true);
          props.getOrder(burgerId)
        }}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
BurgerConstructor.propTypes = {
  total: PropTypes.number,
  state: PropTypes.object,
  setActive: PropTypes.func
}
export default BurgerConstructor;