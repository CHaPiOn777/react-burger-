import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { constructorReducer } from "./constructorReducer";
import { IngredientDetailsReducer } from "./IngredientDetailsReducer";
import { listIgredientsReducer } from "./listIgredientsReducer";
import { orderDetailsReduser } from "./orderDetailsReduser";
import { registerUserReduser } from "./registrationReducer";
import { setUserDispatch } from "./setUserDispatch";

export const rootReducer = combineReducers({
  listIgredients: listIgredientsReducer,
  constructorReducer: constructorReducer,
  IngredientDetailsReducer: IngredientDetailsReducer,
  orderDetailsReduser: orderDetailsReduser,
  registerUserReduser: registerUserReduser,
<<<<<<< HEAD
  authReducer: authReducer
=======
  authReduser: authReduser,
  getUserDispatch: getUserDispatch,
  setUserDispatch: setUserDispatch

>>>>>>> 15e502ea024c342b01612ab1dcce35428213288d
})