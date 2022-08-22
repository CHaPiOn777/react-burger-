const baseURL = 'https://norma.nomoreparties.space/api/'


export const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredients() {
  return fetch(`${baseURL}ingredients`)
    .then(res => checkReponse(res))
}

export function getOrder(id) {
  return fetch(`${baseURL}orders`, {
    method: 'POST',
    body: JSON.stringify({
      ingredients: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse(res))
}

export function resetPasswordEmail(email) {
  return fetch(`${baseURL}password-reset`, {
    method: 'POST',
    body: JSON.stringify({
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse(res))
}

export function resetPassword(password, token) {
  return fetch(`${baseURL}password-reset/reset`, {
    method: 'POST',
    body: JSON.stringify({
      password: password,
      token: token
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse(res))
}

export function registerUser(email, password, Username) {
  return fetch(`${baseURL}auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: Username
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkReponse(res))
}

export function authUser(email, password) {
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
  .then(res => checkReponse(res))
}