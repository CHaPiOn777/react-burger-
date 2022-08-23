import { authUser } from "../../components/utils/burger-api";
import { LOADER } from "./orderDetailsAction";

export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED';

export const authAction = (email, password) => {
  
  return function (dispatch) {
    dispatch({
      type: LOADER
    })
    authUser(email, password)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_AUTH_SUCCESS,
            user: res.user,
            success: res.success,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          })
        } else {
          dispatch ({
            type: GET_AUTH_FAILED
          })
        }
      })
      .catch(err => {
        dispatch({
          type: GET_AUTH_FAILED
        })
      })
  }
}