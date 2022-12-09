
import { getIngredients } from "../../utils/burger-api";
import { AppDispatch, AppThunk } from "../types";
import { TIngredient } from "../types/types";

export const GET_FEED: 'GET_FEED' = 'GET_FEED';
export const GET_FEED_SUCCESS: 'GET_FEED_SUCCESS' = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILED: 'GET_FEED_FAILED' = 'GET_FEED_FAILED';

export const COUNT: 'COUNT' = 'COUNT';

interface IGetFeedSuccess {
  readonly type: typeof GET_FEED_SUCCESS;
  feed: Array<TIngredient>; 
}
interface IGetFeedFailed {
  readonly type: typeof GET_FEED_FAILED;
}
interface IGetFeedReqest {
  readonly type: typeof GET_FEED;
  feed: Array<TIngredient>; 
}

export const fetchIngredients: AppThunk  = () => {
  return function (dispatch: AppDispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоадер или заблокировать 
    // ввод на время выполнения запроса
    dispatch({
      type: GET_FEED
    })
    // Запрашиваем данные у сервера
    getIngredients()
    .then((res) => {
      if (res && res.success) {
        // В случае успешного получения данных вызываем экшен
        // для записи полученных данных в хранилище
        dispatch({
          type: GET_FEED_SUCCESS,
          feed: res.data
        })
      } else {
        // Если произошла ошибка, отправляем соответствующий экшен
        dispatch({
          type: GET_FEED_FAILED
        })
      }
    }).catch((err) => {
      // Если сервер не вернул данных, также отправляем экшен об ошибке
      dispatch({
        type: GET_FEED_FAILED
      })
    })
  }
}

export type TBurgerIngredients = 
  | IGetFeedSuccess
  | IGetFeedReqest
  | IGetFeedFailed