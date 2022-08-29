import { setUserInfo } from "../../components/utils/burger-api";
import { LOADER } from "./orderDetailsAction";
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const SET_USER_FAILED = 'SET_USER_FAILED';

export const setUserAction = (email, name, password) => {
  debugger
  return function (dispatch) {
    dispatch ({
      type: LOADER
    })

    setUserInfo(email, name, password)

      .then(res => {

        if (res) {
          dispatch ({
            type: SET_USER_SUCCESS,
            user: res.user
          })
        } else {
          dispatch ({
            type: SET_USER_FAILED
          })
        }
      })
      .catch(err => {
        dispatch ({
          type: SET_USER_FAILED,
          message: err
        })
      })
  }
}