import React from 'react';

import {
  CloseIcon,
  CheckMarkIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredientDetails from './IngredientDetails.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({props}) => {
  return (
    <div className={stylesIngredientDetails.popup}>
      <div className={stylesIngredientDetails.container}>
        <button className={stylesIngredientDetails.close}>
          <CloseIcon type="primary" />
        </button>

        <h2 className={`${stylesIngredientDetails.title} mt-10 mb-0 ml-10 mr-10 text_type_main-large`}>Детали ингредиента</h2>
        {/* <img src={props.image} alt="" className={`${stylesCardIngredients.img} mr-4 ml-4`} /> */}
        <h3 className={`mt-4 text text_type_main-medium`}>Биокотлета из марсианской Магнолии</h3>
        <ul className={`${stylesIngredientDetails.list} mt-8 mb-15`}>
          <li className={`${stylesIngredientDetails.listItem}`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>244,4</p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Белки, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>12,2</p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Жиры, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>17,2</p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>10,2</p>
          </li>
        </ul>
      </div>
    </div>)
}
export default IngredientDetails;