import { useSelector } from 'react-redux';
import { CardOrder } from '../../components/CardOrder/CardOrder';
import { IconIngredients, IconIngredientsHiden } from '../CardOrder/IconIngredients/IconIngredients';
import style from './Orders.module.css'
export const Orders = () => {
  
  return (
    <ul className={`${style.listOrders}`}>
      <CardOrder />
      <CardOrder />
      <CardOrder status={'Выполнен'} />
      <CardOrder />
    </ul>
  );
};
