import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../OrderDetails/OrderDetails';

import StylesApp from './App.module.css';
import { URL_API } from '../utils/data';
function App() {
  const [popupActive, setPopupActive] = React.useState(true);

  return (
    <div className={StylesApp.page}>
      <AppHeader />
      <OrderDetails active={popupActive} setActive={setPopupActive} />
      <main className={`${StylesApp.main} pl-5 `}>
        <BurgerIngredients data={URL_API} />
        <BurgerConstructor data={URL_API} active={popupActive} setActive={setPopupActive}/>
      </main>
    </div>
  );
}

export default App;
