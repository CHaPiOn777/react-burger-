import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import StylesApp from './App.module.css';
import { getIngredients, getOrders } from '../utils/burger-api';
import { IngredientsContext } from '../utils/IngredientsContext';
import { getElement } from '../../services/action/listIgredientsAction';
import { useDispatch } from 'react-redux';

function App() {
  const [popupIngredients, setPopupIngredients] = React.useState(false);
  const [popupCard, setPopupCard] = React.useState(false);
  const [card, setCard] = React.useState({});
  const [state, setState] = React.useState({
    data: []
  });
  const [orderNumber, setOrderNumber] = React.useState({
    name: '',
    order: {
      number: ''
    },
    success: false
  });

  const getOrdersElem = (id) => {
    getOrders(id)
      .then(res => setOrderNumber(res))
      .catch(e => console.error(e))
  };

  //получили ингредиенты с сервера
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getElement())
  }, [dispatch]);


  return (
    <div className={StylesApp.page}>
      <AppHeader />
      {popupCard &&
        <Modal active={popupCard} setActive={setPopupCard}>
          <IngredientDetails card={card} />
        </Modal>
      }
      {popupIngredients &&
        <Modal active={popupIngredients} setActive={setPopupIngredients} >
          <OrderDetails props={orderNumber}/>
        </Modal>
      }

        <main className={`${StylesApp.main} pl-5 `}>
          <BurgerIngredients setCard={setCard} active={popupCard} setActive={setPopupCard} />
          <BurgerConstructor active={popupIngredients} setActive={setPopupIngredients} getOrder={getOrdersElem} />
        </main>

    </div>
  );
}

export default App;
