import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
 
import StylesApp from './App.module.css';
import {arr, arrConstructor} from '../utils/data';
import {  } from '../utils/data';
function App() {
  return (
    <div className={StylesApp.page}>
      <AppHeader />
      <main className={`${StylesApp.main} pl-5 `}>
        <BurgerIngredients data={arr}/>
        <BurgerConstructor data={arrConstructor}/>
      </main>
    </div>
  );
}

export default App;
