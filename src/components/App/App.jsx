import React, { useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import StylesApp from './App.module.css';
import { fetchIngredients } from '../../services/action/listIgredientsAction';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SignIn from '../../pages/sign-in/signIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from '../../pages/registration/Registration';
import ForgotPassword from '../../pages/forgotPassword/ForgotPassword';
import ResetPassword from '../../pages/resetPassword/ResetPassword';
import Profile from '../../pages/profile/Profile';
import { getCookie, setCookie } from '../utils/utils';
import { getUserAction } from '../../services/action/authAction';
import { ProtectedRoute } from '../protectedRoute/protectedRoute';

function App() {
  const [popupIngredients, setPopupIngredients] = React.useState(false);
  const [popupCard, setPopupCard] = React.useState(false);
  const token = getCookie('token');

  //получили ингредиенты с сервераS
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchIngredients())}, [dispatch]);
  useEffect(() => {dispatch(getUserAction())}, [dispatch])
  //отправляем запрос на сервер для зарегистрированного пользователя
  

  return (
    <BrowserRouter>
      <div className={StylesApp.page}>
        <AppHeader />
        <main className={`${StylesApp.main} pl-5 `}>
          <Switch>
            <DndProvider backend={HTML5Backend}>
              <Route path="/" exact={true}>
                <BurgerIngredients setActive={setPopupCard} />
              </Route>
              <Route path="/" exact={true}>
                <BurgerConstructor setActive={setPopupIngredients} />
              </Route>
              <Route path="/login" exact={true}>
                <SignIn />
              </Route>
              <Route path="/register" exact={true}>
                <Registration />
              </Route>
              <Route path="/reset-password" exact={true}>
                <ResetPassword />
              </Route>
              <Route path="/forgot-password" exact={true}>
                <ForgotPassword />
              </Route>
              <ProtectedRoute path="/profile">
                <Profile />
              </ProtectedRoute>
            </DndProvider>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
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
        
      </main> */}



}

export default App;
