import { INLOADER } from "../action/authAction"
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS, LOADER, TGetOrder } from "../action/orderDetailsAction"

export type TInitialState = {
	feedRequest: boolean;
  feedFailed: boolean;
  loader: boolean;
	order: Number | null | any;
}

const initialState: TInitialState = {
  feedRequest: true,
  feedFailed: false,
  loader: false,
  order: null
}

export const orderDetailsReduser = ( state = initialState, action: TGetOrder ): TInitialState  => {
  switch(action.type) {
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        loader: false,
        order: action.order,
        feedRequest: false,
        feedFailed: false,
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        feedFailed: true,
        loader: true,
        feedRequest: false
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