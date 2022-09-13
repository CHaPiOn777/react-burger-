import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_ORDER } from "../action/wsActions";

const initialState = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null
};

export const wsReduser = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      }
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      }
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      }
    case WS_GET_ORDER:
      return {
        ...state,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        orders: state.orders.length
          ? [...state.orders, ...action.payload.orders]
          : [...action.payload.orders]
      }
    default:
      return state;
  }
}