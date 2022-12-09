import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../../index";
import { TLoader } from "../action/actionCreator";
import { TAuthActions } from "../action/authAction";
import { TBurgerIngredients } from "../action/listIgredientsAction";
import { TGetOrder } from "../action/orderDetailsAction";
import { TWsActions } from "../action/wsActions";
import { rootReducer } from "../reducers/rootReducer"

type TApplicationActions = 
| TAuthActions
| TBurgerIngredients
| TGetOrder
| TWsActions
| TLoader;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>