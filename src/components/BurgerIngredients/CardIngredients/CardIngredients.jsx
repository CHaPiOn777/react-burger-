
import stylesCardIngredients from './CardIngredients.module.css';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { stringify as uuidStringify } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

const CardIngredients = (props) => {
  const { count, card, active, setActive, setData } = props
  const ingredients = useSelector(store => store.dropReducer.feed);
  const dispatch = useDispatch();

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredients',
    item: { card },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  const counter = useMemo(
    () =>
      (count = 0) => {
        for (let item of ingredients) {
          console.log(item, card)
          if (item.card._id === card._id) count++;
        }
        return count
        // if (bun && bun._id === _id) return 2;
        // return count;
      },
    [ingredients]
  );
  return (
    <div className={`${stylesCardIngredients.card} `}
      ref={dragRef}
      style={{ opacity }}
      onClick={
        () => { setActive(true); setData(card) }
      }
    >
      <img src={card.image}
        alt="`${card.name}`"
        className={`${stylesCardIngredients.img} mr-4 ml-4`}
      />
      {counter() > 0 &&
        <Counter count={counter()} size="small" className={stylesCardIngredients.counter} />
      }
      <p className={`${stylesCardIngredients.price} text text_type_digits-default mt-1 mb-1`}>
        {card.price}
        <span className='ml-2'><CurrencyIcon type="primary" /></span>
      </p>
      <p className={`${stylesCardIngredients.name} text text_type_main-default`}>{card.name}</p>
    </div>
  )
}

CardIngredients.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}
export default CardIngredients;