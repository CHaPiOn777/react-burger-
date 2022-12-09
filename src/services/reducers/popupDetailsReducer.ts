import { INLOADER } from "../action/authAction.ts"
import { IItemInfo, POPUP_ITEM, TOrderInfo } from "../action/IngredientDetailsAction"
import { LOADER } from "../action/orderDetailsAction"
import { TIngredientsInfo } from "../types/types";

export type TInitialState = {
	item: TIngredientsInfo | null;
  priceOrder: string | number | null;
  loader: boolean;
}

const initialState: TInitialState = {
  item: null,
  priceOrder: null,
  loader: false
}

export const popupDetailsReducer = (state = initialState, action: TOrderInfo): TInitialState => {
  switch (action.type) {
    case POPUP_ITEM: {
      return {
        ...state,
        item: action.item,
        loader: false,
        priceOrder: action.priceOrder ? action.priceOrder : ''
      }
    }
    case LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case INLOADER: {
      return {
        ...state,
        loader: false
      }
    }
    default: {
      return state
    }

  }
}