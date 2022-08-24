import { SET_USER_FAILED, SET_USER_SUCCESS } from "../action/setUserAction"

const initialState = {
  user: {},
  message: null
}

export const setUserDispatch = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS: {
      return {
        ...state,
        user: {email: action.user.email, name: action.user.name}
      }

    }
    case SET_USER_FAILED: {
      return {
        ...state,
        message: action.message
      }
    }
    default:
      return state;
  }
}