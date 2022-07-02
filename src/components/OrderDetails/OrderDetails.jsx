import React from 'react';

import {
  CloseIcon,
  CheckMarkIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesOrderDetails from './OrderDetails.module.css';
import PropTypes from 'prop-types';
import successImg from '../../image/done.jpg'

const OrderDetails = () => {
  return (
    <div className={stylesOrderDetails.popup}>
      <div className={stylesOrderDetails.container}>
        <button className={stylesOrderDetails.close}>
          <CloseIcon type="primary" />
        </button>
        <h2 className={`${stylesOrderDetails.number} mt-30 mb-0 text text_type_digits-large`}>034536</h2>
        <h3 className={`mt-8 mb-15 text text_type_main-medium`}>идентификатор заказа</h3>
        <img src={successImg} alt="Галочка с фоном" className={stylesOrderDetails.success} />
        <h4 className={`mt-15 mb-0 text text_type_main-default`}>Ваш заказ начали готовить</h4>
        <p className={`mt-2 mb-30 text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>)
}
export default OrderDetails;