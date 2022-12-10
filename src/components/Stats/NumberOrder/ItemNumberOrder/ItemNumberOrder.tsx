import {FC} from 'react';
import PropTypes from 'prop-types';

export type TItemNumberOrder = {
	item: any;
  key: Number
};

export const ItemNumberOrder: FC<TItemNumberOrder> = ({ item }) => {
  console.log(item)
  const styleOrder = item.status === 'done' ? 'text_color_success' : ''; 
  return (
    <>
      <li className={`text text_type_digits-default ${styleOrder}`}>{item.number}</li>
    </>
  );
};
