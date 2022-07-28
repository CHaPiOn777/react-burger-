import { combineReducers } from "redux";
import { dropReducer } from "./dropReducer";
import { listIgredientsReducer } from "./listIgredientsReducer";

export const rootReducer = combineReducers({
  listIgredients: listIgredientsReducer,
  dropReducer: dropReducer
  // listCurrentIgredients: listCurrentIgredientsReducer,
  // objCurrentIngredients: objCurrentIngredientsReducer,
  // objNewOrder: objNewOrderReducer
})