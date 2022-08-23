import { combineReducers } from "redux";
import { authReduser } from "./authReduser";
import { constructorReducer } from "./constructorReducer";
import { getUserDispatch } from "./getUserDispatch";
import { IngredientDetailsReducer } from "./IngredientDetailsReducer";
import { listIgredientsReducer } from "./listIgredientsReducer";
import { orderDetailsReduser } from "./orderDetailsReduser";
import { registerUserReduser } from "./registrationReducer";

export const rootReducer = combineReducers({
  listIgredients: listIgredientsReducer,
  constructorReducer: constructorReducer,
  IngredientDetailsReducer: IngredientDetailsReducer,
  orderDetailsReduser: orderDetailsReduser,
  registerUserReduser: registerUserReduser,
  authReduser: authReduser,
  getUserDispatch: getUserDispatch
})