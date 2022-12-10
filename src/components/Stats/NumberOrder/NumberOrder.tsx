
import { ItemNumberOrder } from './ItemNumberOrder/ItemNumberOrder';
import style from './NumberOrder.module.css';
import PropTypes from 'prop-types';
import {FC} from 'react';
import { TFeed } from '../../../services/types/types';

export type TNumberOrder = {
	orderNumber: TFeed[],
  orderNumberRest: TFeed[]
};


export const NumberOrder: FC<TNumberOrder> = ({ orderNumber, orderNumberRest }) => {

  return (
    <div className={style.list}>
      <ul className={style.listNumberOrders}>
        {orderNumber &&
          orderNumber.map((item, index) => {
            if (index > 10) {
              return
            }
            return <ItemNumberOrder item={item} key={item._id} />
          })}
      </ul>
      {orderNumberRest &&
        <ul className={style.listNumberOrders}>
          {orderNumberRest.map(item => {
            return <ItemNumberOrder item={item} key={item._id} />
          })}
        </ul>
      }
    </div>
  );
};
