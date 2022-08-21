import { LOADER } from "../action/orderDetailsAction";
import { GET_REGISTER_FAILED, GET_REGISTER_SUCCESS } from "../action/registrationAction";

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  loader: false,
  message: ''
}

export const registerUserReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTER_SUCCESS: {
      return {
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        loader: false
      }
    }
    case GET_REGISTER_FAILED: {
      return {
        message: action.message,
        loader: false
      }
    }
    case LOADER: {
      return {
        loader: true
      }
    }
    default:
      return state;
  }
}