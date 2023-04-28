import { POPUP_CLOSE, POPUP_ITEM_INFO, POPUP_ORDER, POPUP_ORDER_ITEM_INFO, TPopup } from "../action/popupAction"


export type TInitialState = {
	popupCard: boolean;
	popupOrder: boolean;
	popupOrderInfo: boolean;
}

const initialState: TInitialState = {
  popupCard: false,
  popupOrder: false,
  popupOrderInfo: false
}

export const popupReduser = (state = initialState, action: TPopup): TInitialState => {
  switch (action.type) {
    case POPUP_ITEM_INFO: {
      return {
        ...state,
        popupCard: true
      }
    }    
    case POPUP_ORDER_ITEM_INFO: {
      return {
        ...state,
        popupOrderInfo: true
      }
    }
    case POPUP_ORDER: {
      return {
        ...state,
        popupOrder: true
      }
    }
    case POPUP_CLOSE: {
      return {
        popupCard: false,
        popupOrder: false,
        popupOrderInfo: false
      }
    }
    default: {
      return state
    }

  }
}
