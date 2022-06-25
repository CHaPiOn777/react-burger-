import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import stylesApp from './App';
import './App.css';

function App() {
  return (
    <div className={stylesApp.page}>
      <AppHeader />
      <main className={stylesApp.main}>
        <BurgerIngredients />
      </main>
    </div>
  );
}

export default App;
