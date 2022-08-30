import { authUser, logoutUser, getUserInfo } from "../../components/utils/burger-api";
import { deleteCookie, setCookie } from "../../components/utils/utils";
import { LOADER } from "./orderDetailsAction";
import { useHistory } from 'react-router-dom';

export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUserAction = () => {
  return function (dispatch) {
    dispatch ({
      type: LOADER
    })
    getUserInfo()
      .then(res => {
        if (res && res.success) {
          dispatch ({
            type: GET_USER_SUCCESS,
            user: res.user
          })
        } else {
          dispatch ({
            type: GET_USER_FAILED
          })
        }
      })
      .catch(err => {
        dispatch ({
          type: GET_USER_FAILED,
          message: err
        })
      })
  }
}

export const authAction = (email, password) => {

  return function (dispatch) {
    dispatch({
      type: LOADER
    })
    authUser(email, password)
      .then(res => {
        const accessToken = res.accessToken.split('Bearer ')[1];
        const refreshToken = res.refreshToken;
        setCookie('token', accessToken, { 'max-age': 1200 });
        localStorage.setItem('refreshToken', refreshToken);
        return res;
      })
      .then(res => {
        if (res) {

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

export const logoutUserAction = () => {

  return function(dispatch) {
    dispatch({
      type: LOADER
    })
    logoutUser(localStorage.getItem('refreshToken'))
      .then(res => {
        if (res && res.success) {
          dispatch({ type: USER_LOGOUT_SUCCESS });
          deleteCookie('token');
          localStorage.clear();
          
        }
      })
      .catch(err => dispatch({ type: USER_LOGOUT_FAILED }))
  }
}
