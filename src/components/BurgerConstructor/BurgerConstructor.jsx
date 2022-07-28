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
import { useDrop } from 'react-dnd';
import { UPDATE_TYPE } from '../../services/action/dropAction';


const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(store => store.listIgredients.feed);
  const ingredients = useSelector(store => store.dropReducer.feed);


  const [total, setTotal] = useState(0);

  const [{ isCount }, dropTarget] = useDrop({

    accept: 'ingredients',
    drop(item) {
      dispatch({
        type: UPDATE_TYPE,
        ...item,
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
        {bunFilter && <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bunFilter.name} (вверх)`}
          price={bunFilter.price}
          thumbnail={bunFilter.image}
        />}
      </div>
      <div className={`${stylesConstructor.topings}`} >
        {ingredients.map(item => {
          return (
            <div className={`${stylesConstructor.ingredient}`} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                type={item.type}
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
            )})}

      </div>
      <div className={`${stylesConstructor.ingredient} ml-8`}>
        {bunFilter && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bunFilter.name} (низ)`}
          price={bunFilter.price}
          thumbnail={bunFilter.image}
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