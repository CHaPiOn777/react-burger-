import { combineReducers } from "redux";
import { listIgredientsReducer } from "./listIgredientsReducer";

export const rootReducer = combineReducers({
  listIgredients: listIgredientsReducer,
  // listCurrentIgredients: listCurrentIgredientsReducer,
  // objCurrentIngredients: objCurrentIngredientsReducer,
  // objNewOrder: objNewOrderReducer
})