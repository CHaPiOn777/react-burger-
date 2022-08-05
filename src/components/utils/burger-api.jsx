export const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredients() {
  return fetch('https://norma.nomoreparties.space/api/ingredients')
    .then(res => checkReponse(res))
}

export function getOrder(id) {
  return fetch('https://norma.nomoreparties.space/api/orders', {
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

