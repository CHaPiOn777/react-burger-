import PropTypes from 'prop-types';
import { TIngredient, TOrder1 } from '../../services/types/types';
import { CardOrder } from './CardOrder/CardOrder';
import style from './Orders.module.css';
import { FC } from 'react';



type TOrdersInfoDetails = {
	orders: TOrder1[];
}
export const Orders: FC<TOrdersInfoDetails> = ({ orders }) => {

  return (
    orders &&
      (<ul className={`${style.listOrders}`}>
        {orders.map(order => {
          return <CardOrder order={order} key={order._id} />
        })}
      </ul>
)
  );
};
