import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import StylesApp from './App.module.css';
import { URL_API } from '../utils/data';
function App() {
  const [popupIngredients, setPopupIngredients] = React.useState(false);
  const [popupCard, setPopupCard] = React.useState(false);
  const [card, setCard] = React.useState({});

  return (
    <div className={StylesApp.page}>
      <AppHeader />
      <IngredientDetails card={card} active={popupCard} setActive={setPopupCard} />
      <OrderDetails active={popupIngredients} setActive={setPopupIngredients} />
      <main className={`${StylesApp.main} pl-5 `}>
        <BurgerIngredients setCard={setCard} data={URL_API} active={popupCard} setActive={setPopupCard}/>
        <BurgerConstructor data={URL_API} active={popupIngredients} setActive={setPopupIngredients}/>
      </main>
    </div>
  );
}

export default App;
