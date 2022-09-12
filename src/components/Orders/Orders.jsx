import { useSelector } from 'react-redux';
import { CardOrder } from './CardOrder/CardOrder';
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
