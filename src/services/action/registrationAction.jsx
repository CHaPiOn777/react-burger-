import { registerUser } from "../../components/utils/burger-api";
import { setCookie } from "../../components/utils/utils";
import { LOADER } from "./orderDetailsAction";

export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';

export const registerUserAction = (email, password, name) => {

  return function (dispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
    // ввод на время выполнения запроса
    dispatch({
      type: LOADER
    })
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
          // dispatch({
          //   type: RESET_ITEMS
          // })
        } else {
          // Если произошла ошибка, отправляем соответствующий экшен
          dispatch({
            type: GET_REGISTER_FAILED
          })
        }
      }).catch(err => {
        // Если сервер не вернул данных, также отправляем экшен об ошибке
        dispatch({
          type: GET_REGISTER_FAILED
        })
      })
  }
}