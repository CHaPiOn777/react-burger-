import { authUser, logoutUser, getUserInfo, resetPassword, resetPasswordEmail, changeUserInfo, registerUser, updateToken } from "../../utils/burger-api";
import { deleteCookie, setCookie } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../types";
import { inLoader, loader, TLoader } from "./actionCreator";
import { TAccessToken, TRefreshToken, TUser } from "../types/types";

export const GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS' = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED: 'GET_AUTH_FAILED' = 'GET_AUTH_FAILED';
export const USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS' = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILED: 'USER_LOGOUT_FAILED' = 'USER_LOGOUT_FAILED';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';
export const USER_RESET_FAILED: 'USER_RESET_FAILED' = 'USER_RESET_FAILED';
export const USER_RESET_SUCCESS: 'USER_RESET_SUCCESS' = 'USER_RESET_SUCCESS';
export const USER_RESET_EMAIL_SUCCESS: 'USER_RESET_EMAIL_SUCCESS' = 'USER_RESET_EMAIL_SUCCESS';
export const USER_RESET_EMAIL_FAILED: 'USER_RESET_EMAIL_FAILED' = 'USER_RESET_EMAIL_FAILED';
export const USER_CHANGE_SUCCESS: 'USER_CHANGE_SUCCESS' = 'USER_CHANGE_SUCCESS';
export const USER_CHANGE_FAILED: 'USER_CHANGE_FAILED' = 'USER_CHANGE_FAILED';
export const UPDATE_TOKEN: 'UPDATE_TOKEN' = 'UPDATE_TOKEN';

export const GET_REGISTER_SUCCESS: 'GET_REGISTER_SUCCESS' = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED: 'GET_REGISTER_FAILED' = 'GET_REGISTER_FAILED';
export const INLOADER: 'INLOADER' = 'INLOADER';

interface IRegisterSuccess {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly user: TUser; 
  readonly accessToken: TAccessToken;
  readonly refreshToken: TRefreshToken;
}
interface IRegisterFailed {
  readonly type: typeof GET_REGISTER_FAILED;
  readonly message?: string; 
}

export const registerUserAction: AppThunk = (email: string, password: string, name: string) => {
  return function (dispatch: AppDispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
    // ввод на время выполнения запроса
    dispatch(loader());
    // Запрашиваем данные у сервера
    registerUser(email, password, name)
      .then(res => {
        const accessToken = res.accessToken.split('Bearer ')[1];
        const refreshToken = res.refreshToken;
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return res;
      })
      .then(res => {
        if (res && res.success) {

          // В случае успешного получения данных вызываем экшен
          // для записи полученных данных в хранилище
          dispatch({
            type: GET_REGISTER_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          });
        }
      }).catch(err => {
        // Если сервер не вернул данных, также отправляем экшен об ошибке
        dispatch({
          type: GET_REGISTER_FAILED,
          message: err.message
        })

      })
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
  readonly message?: string; 
}
interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser; 
}

export const getUserAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    getUserInfo()
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user
          })
        } else {
          dispatch({
            type: GET_USER_FAILED
          })
        }
      })
      .catch(err => {
        dispatch({
          type: GET_USER_FAILED,
          message: err.message
        })
      })
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface IAuthFailed {
  readonly type: typeof GET_AUTH_FAILED;
  readonly message?: string; 
}

interface IAuthSuccess {
  readonly type: typeof GET_AUTH_SUCCESS;
  readonly user: TUser; 
  readonly success: boolean;
}

export const authAction: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loader());
    authUser(email, password)
      .then(res => {
        const accessToken = res.accessToken.split('Bearer ')[1];
        const refreshToken = res.refreshToken;
        setCookie('token', accessToken);
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
          type: GET_AUTH_FAILED,
          message: err.message
        })
      })
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface IUpdateToken {
  readonly type: typeof UPDATE_TOKEN;
}

export const updateTokenAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(loader())
    updateToken(localStorage.getItem('refreshToken'))
      .then(res => {
        const accessToken = res.accessToken.split('Bearer ')[1];
        const refreshToken = res.refreshToken;
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return res;
      }).then(res => {
        if (res && res.success) {
          dispatch({ type: UPDATE_TOKEN })
        }
      })
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface ILogoutUserFailed {
  readonly type: typeof USER_LOGOUT_FAILED;
  readonly message?: string;
}
interface ILogoutUserSuccess {
  readonly type: typeof USER_LOGOUT_SUCCESS;
}
export const logoutUserAction: AppThunk = () => {

  return function (dispatch: AppDispatch) {
    dispatch(loader())
    logoutUser(localStorage.getItem('refreshToken'))
      .then(res => {
        if (res && res.success) {
          dispatch({ type: USER_LOGOUT_SUCCESS });
          deleteCookie('token');
          localStorage.clear();
        }
      })
      .catch(err => dispatch({
        type: USER_LOGOUT_FAILED,
        message: err.message
      })
      )
      .finally(() => {
        dispatch(inLoader())
      })
  }
}


interface IResetPasswordEmailFailed {
  readonly type: typeof USER_RESET_EMAIL_FAILED;
  readonly message?: string;
}
interface IResetPasswordEmailSuccess {
  readonly type: typeof USER_RESET_EMAIL_SUCCESS;
}

export const resetPasswordEmailAction: AppThunk = (email: string) => {

  return function (dispatch: AppDispatch) {
    dispatch(loader())
    resetPasswordEmail(email)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: USER_RESET_EMAIL_SUCCESS
          });
        }
      })
      .catch(err => dispatch({
        type: USER_RESET_EMAIL_FAILED,
        message: err.message
      }))
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface IResetPasswordFailed {
  readonly type: typeof USER_RESET_FAILED;
  readonly message?: string;
}
interface IResetPasswordSuccess {
  success?: boolean;
  readonly type: typeof USER_RESET_SUCCESS;
}

export const resetPasswordAction: AppThunk = (password: string, code: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loader())
    resetPassword(password, code)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: USER_RESET_SUCCESS,
            success: res.success
          });
        }
      })
      .catch(err => dispatch({
        type: USER_RESET_FAILED,
        message: err.message
      }))
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

interface IChangeUserInfoFailed {
  readonly type: typeof USER_CHANGE_FAILED;
  readonly message?: string;
}
interface IChangeUserInfoSuccess {
  user: any;
  readonly type: typeof USER_CHANGE_SUCCESS;
}

export const changeUserInfoAction: AppThunk = (email: string, name: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loader())
    changeUserInfo(email, name, password)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: USER_CHANGE_SUCCESS,
            user: res.user
          });
        }
      })
      .catch(err => dispatch({
        type: USER_CHANGE_FAILED,
        message: err.message
      }))
      .finally(() => {
        dispatch(inLoader())
      })
  }
}

export type TAuthActions =
  | IRegisterSuccess
  | IRegisterFailed
  | IGetUserFailed
  | IGetUserSuccess
  | IAuthFailed
  | IAuthSuccess
  | IUpdateToken
  | ILogoutUserFailed
  | ILogoutUserSuccess
  | IResetPasswordFailed
  | IResetPasswordSuccess
  | IResetPasswordEmailFailed
  | IResetPasswordEmailSuccess
  | IChangeUserInfoFailed
  | IChangeUserInfoSuccess
  | TLoader;