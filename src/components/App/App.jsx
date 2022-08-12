import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import StylesApp from './App.module.css';
import { fetchIngredients } from '../../services/action/listIgredientsAction';
import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SignIn from '../../pages/sign-in/signIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from '../../pages/registration/Registration';

function App() {
  const [popupIngredients, setPopupIngredients] = React.useState(false);
  const [popupCard, setPopupCard] = React.useState(false);

  //получили ингредиенты с сервера
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients())
  }, [dispatch]);


  return (
    <React.StrictMode >
      <BrowserRouter>
        <div className={StylesApp.page}>
          <AppHeader />
          <Switch>
            <Route path="/" exact={true}>
              <SignIn />
            </Route>
            <Route path="/register" exact={true}>
              <Registration />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  )
  {/* {popupCard &&
        <Modal active={popupCard} setActive={setPopupCard}>
          <IngredientDetails/>
        </Modal>
      }
      {popupIngredients &&
        <Modal active={popupIngredients} setActive={setPopupIngredients} >
          <OrderDetails/>
        </Modal>
      }

      <main className={`${StylesApp.main} pl-5 `}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients setActive={setPopupCard} />
          <BurgerConstructor setActive={setPopupIngredients} />
        </DndProvider>
      </main> */}



}

export default App;
