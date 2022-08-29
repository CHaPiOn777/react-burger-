import { GET_USER_FAILED, GET_USER_SUCCESS } from "../action/getUserAction"

const initialState = {
  user: {},
  message: null
}

export const getUserDispatch = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
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
    default:
      return state;
  }
}