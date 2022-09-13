import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { constructorReducer } from "./constructorReducer";
import { IngredientDetailsReducer } from "./IngredientDetailsReducer";
import { listIgredientsReducer } from "./listIgredientsReducer";
import { orderDetailsReduser } from "./orderDetailsReduser";
import { popupReduser } from "./popupReduser";
import { wsReduser } from "./wsReduser";

export const rootReducer = combineReducers({
  listIgredients: listIgredientsReducer,
  constructorReducer: constructorReducer,
  IngredientDetailsReducer: IngredientDetailsReducer,
  orderDetailsReduser: orderDetailsReduser,
  authReducer: authReducer,
  popupReduser: popupReduser,
  wsReduser: wsReduser
})