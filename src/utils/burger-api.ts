import { TIngredientResponse, TOrderDetailsResponse, TUserLogoutResponse, TUserResponce } from "../services/types/types";
import { deleteCookie, getCookie, setCookie } from "./utils";

const baseURL = 'https://norma.nomoreparties.space/api/'


export const checkReponse = <T> (res: Response): Promise<T> => {
  return res.ok ?
    res.json() :
    res.json()
      .then((err) => {
        if (err.message === 'jwt malformed' || err.message === 'jwt expired') {
          updateToken(localStorage.getItem('refreshToken'))
          .then(res => {
            deleteCookie('token');
            const accessToken = res.accessToken.split('Bearer ')[1];
            const refreshToken = res.refreshToken;
            setCookie('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            return res;
          });
        }
        Promise.reject(err);
      });
};

export function getIngredients() {
  return fetch(`${baseURL}ingredients`)
    .then(res => checkReponse<TIngredientResponse>(res))
}

export function getOrder(id: string) {
  return fetch(`${baseURL}orders`, {
    method: 'POST',
    body: JSON.stringify({
      ingredients: id
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(res => checkReponse<TOrderDetailsResponse>(res))
}

export function resetPasswordEmail(email:string) {
  return fetch(`${baseURL}password-reset`, {
    method: 'POST',
    body: JSON.stringify({
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse<TUserResponce>(res))
}

export function resetPassword(password:string, code:string | any) {
  return fetch(`${baseURL}password-reset/reset`, {
    method: 'POST',
    body: JSON.stringify({
      password: password,
      token: code
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse<TUserResponce>(res))
}

export function registerUser(email:string, password:string, userName:string) {
  return fetch(`${baseURL}auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: userName
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse<TUserResponce>(res))
}

export function authUser(email:string, password:string) {
  return fetch(`${baseURL}auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse<TUserResponce>(res))

}

export function getUserInfo() {
  return fetch(`${baseURL}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(res => checkReponse<TUserResponce>(res))

}

export function changeUserInfo(email:string, name:string, password:string) {
  return fetch(`${baseURL}auth/user`, {
    method: 'PATCH',
    body: JSON.stringify({
      email: email,
      name: name,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(res => checkReponse<TUserResponce>(res))
}
export function logoutUser(refreshToken:string | null) {
  return fetch(`${baseURL}auth/logout`, {
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse<TUserLogoutResponse>(res))
}
export function updateToken(refreshToken:string | null) {
  return fetch(`${baseURL}auth/token`, {
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(res => checkReponse<TUserResponce>(res))
}

