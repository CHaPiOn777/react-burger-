import React from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesConstructor from './BurgerConstructor.module.css';




const BurgerConstructor  = (props) => {
  let summa = 0;
  const [state, setState] = React.useState({
    data: []
  });
  React.useEffect(() => {
    getElement();
  }, []);
  const getElement = () => {
    setState({ ...state });
    fetch(props.data)
      .then(res => res.json())
      .then(result => setState(result))
      .catch(e => console.error(e))
  }
  return (
    <section className={`${stylesConstructor.constructor} mt-25 ml-10`}>
      <div className={`${stylesConstructor.ingredient} ml-8`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={`${stylesConstructor.topings}`}>
        {state.data.map((el) => {
          if (el.type === "main" || el.type === "sauce") {
            summa = summa + el.price;
            return (
              <div className={`${stylesConstructor.ingredient}`} key={el._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>)
          }
        })}
      </div>
      <div className={`${stylesConstructor.ingredient} ml-8`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />
      </div>
      <div className={`${stylesConstructor.order} mt-6`}>
        <p className={`text text_type_digits-medium`}>
          {`${summa / 2 + 400}`}
          <span className='ml-2'><CurrencyIcon type="primary" /></span>
        </p>
        <Button type="primary" size="large" onClick={() => {props.setActive(true)}}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
BurgerConstructor.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    data: PropTypes.string.isRequired,
    setActive: PropTypes.func,
  }),
}
export default BurgerConstructor;