import React from 'react';

import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredientDetails from './IngredientDetails.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  return (
    <ModalOverlay active={props.active} setActive={props.setActive}>
      <div className={stylesIngredientDetails.container} onClick={e => e.stopPropagation()}>
        <button className={`${stylesIngredientDetails.close} mt-7 mr-5`} onClick={() => props.setActive(false)}>
          <CloseIcon type="primary" />
        </button>

        <h2 className={`${stylesIngredientDetails.title} mt-10 mb-0 ml-10 mr-10 text_type_main-large`}>Детали ингредиента</h2>
        <img src={props.card.image} alt={props.card.name} className={`${stylesIngredientDetails.img} mr-4 ml-4`} />
        <h3 className={`mt-4 text text_type_main-medium`}>{props.card.name}</h3>
        <ul className={`${stylesIngredientDetails.list} mt-8 mb-15`}>
          <li className={`${stylesIngredientDetails.listItem}`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>{props.card.calories}</p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Белки, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>{props.card.proteins} </p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Жиры, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>{props.card.fat}</p>
          </li>
          <li className={`${stylesIngredientDetails.listItem} ml-5`}>
            <p className={`${stylesIngredientDetails.name} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
            <p className={`${stylesIngredientDetails.name} mt-2 mb-18 text text_type_digits-default text_color_inactive`}>{props.card.carbohydrates} </p>
          </li>
        </ul>
      </div>
    </ModalOverlay>)
}

IngredientDetails.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    active: PropTypes.bool,
    setActive: PropTypes.func
  }),
}
export default IngredientDetails;