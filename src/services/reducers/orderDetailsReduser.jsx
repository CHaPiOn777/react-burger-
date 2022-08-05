import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS } from "../action/orderDetailsAction"

const initialState = {
  feedRequest: true,
  feedFailed: false,
  order: []
}

export const orderDetailsReduser = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_ORDER: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        feedRequest: false
      }
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false
      }
    }
    default: {
      return state
    }
  }
}