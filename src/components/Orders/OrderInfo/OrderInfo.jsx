import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setDate } from '../../../utils/utils';
import style from './OrderInfo.module.css'
import { OrderItemInfo } from './OrderItemInfo/OrderItemInfo';
import PropTypes from 'prop-types';

export const OrderInfo = ({ popupOrder }) => {

  const ingredients = useSelector(store => store.listIgredients.feed);
  const { id } = useParams();
  const order = popupOrder?.find(order => order._id === id);

  //подтянули данные по иконкам
  const conformityIngredientsIcon = useMemo(() =>
    order?.ingredients.map(item => ingredients.find(ingredient => ingredient._id === item)),
    [order, order?.ingredients]
  );

  //создали новый массив заказа с измененными данными иконок
  const conformityIngredients = { ...order, ingredients: conformityIngredientsIcon };

  const bunOrder = useMemo(() =>
    conformityIngredientsIcon?.find(item => item?.type === 'bun'),
    [conformityIngredientsIcon]
  );
  const priceOrder = useMemo(() =>
    conformityIngredientsIcon?.reduce((sum, item) => +sum + item?.price, [bunOrder?.price]),
    [conformityIngredientsIcon, bunOrder]
  );

  const activeClass = () => {
    return conformityIngredients.status === 'done' ? 'text_color_success' : ''
  }
  const orderStatusRus = useMemo(() =>
    order?.status === 'done' ? 'Выполнен' : order?.status === 'created' ? 'Создается' : 'Ожидается',
    [order, order?.status]
  )
  const getChangeFormatDate = setDate(conformityIngredients.createdAt);
  return (
    <>
      {conformityIngredients &&
        <div className={style.orderInfo}>
          <p className={`${style.orderNumber} text text_type_digits-default`}>{`#${conformityIngredients.number}`}</p>
          <h2 className={`${style.nameIngredient} text text_type_main-medium mt-10`}>{conformityIngredients.name}</h2>
          <p className={`${activeClass()} text text_type_main-small mt-3`}>{orderStatusRus}</p>
          <h3 className={`${style.consistTitle} text text_type_main-medium mt-15`}>Состав:</h3>
          <ul className={`${style.listOrderInfo} mt-6`}>
            {conformityIngredients.ingredients?.map((item, index) => {
              return (
                <OrderItemInfo item={item} key={index} />
              )
            })}
          </ul>
          <div className={`${style.data} mt-10`}>
            <p className="text text_type_main-small text_color_inactive">{getChangeFormatDate}</p>
            <div className={`${style.price}`}>
              <p className={`${style.priceNumber} text text_type_digits-default`}>{priceOrder}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>}
    </>
  );
};

OrderItemInfo.propTypes = {
  order: PropTypes.array
}
