import { getOrder } from "../../components/utils/burger-api";

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const GET_ORDER = 'GET_ORDER';

export const getOrderAction = (id) => {
  return function (dispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
    // ввод на время выполнения запроса
    dispatch({
      type: GET_ORDER
    })
    // Запрашиваем данные у сервера
    getOrder(id)
    .then(res => {
      if (res && res.success) {
        // В случае успешного получения данных вызываем экшен
        // для записи полученных данных в хранилище
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order.number
        })
      } else {
        // Если произошла ошибка, отправляем соответствующий экшен
        dispatch({
          type: GET_ORDER_FAILED
        })
      }
    }).catch(err => {
      // Если сервер не вернул данных, также отправляем экшен об ошибке
      dispatch({
        type: GET_ORDER_FAILED
      })
    })
  }
}