import { GET_AUTH_FAILED, GET_AUTH_SUCCESS } from "../action/authAction";
import { LOADER } from "../action/orderDetailsAction";

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  success: false,
  loader: false
}

export const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTH_SUCCESS: {
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        loader: false,
        success: action.success
      }
    }
    case LOADER: {
      return {
        loader: true
      }
    }
    case GET_AUTH_FAILED: {
      return {
        message: action.message,
        loader: false
      }
    }
    default:
      return state;
  }
}