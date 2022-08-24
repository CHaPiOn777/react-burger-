import { authUser } from "../../components/utils/burger-api";
import { setCookie } from "../../components/utils/utils";
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
        const accessToken = res.accessToken.split('Bearer ')[1];
        const refreshToken = res.refreshToken;
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return res;
      })
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_AUTH_SUCCESS,
            user: res.user,
            success: res.success
          })
        } else {
          dispatch({
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