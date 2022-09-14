import React from 'react';

export const ItemNumberOrder = ({ item }) => {
  const styleOrder = item.status === 'done' ? 'text_color_success' : ''; 
  return (
    <>
      <li className={`text text_type_digits-default ${styleOrder}`}>{item.number}</li>
    </>
  );
};
