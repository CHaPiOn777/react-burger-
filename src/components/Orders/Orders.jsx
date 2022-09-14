import { useSelector } from 'react-redux';
import { CardOrder } from './CardOrder/CardOrder';
import style from './Orders.module.css'

export const Orders = ({orders}) => {

  return (
    <ul className={`${style.listOrders}`}>
      {orders.map(order => {
        return <CardOrder order={order} key={order._id}/>
      })}
    </ul>
  );
};
