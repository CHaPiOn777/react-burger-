import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
 
import StylesApp from './App.module.css';

function App() {
  return (
    <div className={StylesApp.page}>
      <AppHeader />
      <main className={StylesApp.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
