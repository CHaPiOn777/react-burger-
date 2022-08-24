import { getUserInfo } from "../../components/utils/burger-api";
import { LOADER } from "./orderDetailsAction";
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';
console.log(getUserInfo())
export const getUserAction = () => {
  return function (dispatch) {
    dispatch({
      type: LOADER
    })

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
          message: err
        })
      })
  }
}