import { GET_AUTH_FAILED, GET_AUTH_SUCCESS } from "../action/authAction";
import { LOADER } from "../action/orderDetailsAction";

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  success: false,
  loader: false,
  authToken: null
}

export const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTH_SUCCESS: {
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        loader: false,
        success: action.success,
        authToken: action.accessToken.replace(/Bearer /gi, '')
      }
    }
    case LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case GET_AUTH_FAILED: {
      return {
        ...state,
        message: action.message,
        loader: false
      }
    }
    default:
      return state;
  }
}