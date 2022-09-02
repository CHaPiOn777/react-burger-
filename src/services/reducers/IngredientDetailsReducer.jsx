import { POPUP_ITEM } from "../action/IngredientDetailsAction"
import { LOADER } from "../action/orderDetailsAction"

const initialState = {
  item: [],
  loader: false
}

export const IngredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_ITEM: {
      return {
        ...state,
        item: action.item,
        loader: false
      }
    }
    case LOADER: {
      return {
        loader: true
      }
    }
    default: {
      return state
    }

  }
}