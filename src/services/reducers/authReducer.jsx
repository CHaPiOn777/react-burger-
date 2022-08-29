import { GET_AUTH_FAILED, GET_AUTH_SUCCESS, GET_USER_FAILED, GET_USER_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESS } from "../action/authAction";
import { LOADER } from "../action/orderDetailsAction";

const initialState = {
  user: {},
  success: false,
  loader: false
}

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTH_SUCCESS: {
      return {
        ...state,
        loader: false,
        success: action.success
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
    case GET_USER_SUCCESS: {
      console.log(action)
      return {
        ...state,
        user: {email: action.user.email, name: action.user.name}
      }

    }
    case GET_USER_FAILED: {
      return {
        ...state,
        message: action.message
      }
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        loader: false
      }
    }
    case USER_LOGOUT_FAILED: {
      return {
        ...state,
        loader: false
      }
    }
    default:
      return state;
  }
}