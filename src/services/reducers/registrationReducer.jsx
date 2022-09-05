import { INLOADER } from "../action/authAction";
import { LOADER } from "../action/orderDetailsAction";
import { GET_REGISTER_FAILED, GET_REGISTER_SUCCESS } from "../action/registrationAction";

const initialState = {
  user: {},
  loader: false,
  message: ''
}

export const registerUserReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTER_SUCCESS: {
      return {
        user: action.user,
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
    case INLOADER: {
      return {
        ...state,
        loader: false
      }
    }
    default:
      return state;
  }
}