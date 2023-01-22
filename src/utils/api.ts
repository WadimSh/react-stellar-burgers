import { getCookie } from './cookie';

const BASE_URL = "https://norma.nomoreparties.space/api";

class Api {
  private url: string;
  constructor(baseUrl: string) {
    this.url = baseUrl;
  }

  //проверка статуса
  _checkResponse = (res: Response) => {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  //запрос на получение ингредиентов
  getIngredients() {
    return fetch(`${this.url}/ingredients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => this._checkResponse(res));
  }

  //отправка созданного заказа
  postOrderDetails(data: Array<string>) {
    return fetch(`${this.url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${getCookie('token')}`,
      },
      body: JSON.stringify({ ingredients: data }),
    })
    .then(res => this._checkResponse(res));
  }

  //востановление пароля
  requestPassword(email: string) {
    return fetch(`${this.url}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    .then(res => this._checkResponse(res));
  }

  //сброс пароля
  resetPassword(password: string, token: string) {
    return fetch(`${this.url}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        password: password,
      }),
    })
    .then(res => this._checkResponse(res));
  }

  //авторизация пользователя
  authorization(email: string, password: string) {
    return fetch(`${this.url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(res => this._checkResponse(res));
  }

  //регистрация пользователя
  registerUser(name: string, email: string, password: string) {
    return fetch(`${this.url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
    })
    .then(res => this._checkResponse(res));
  }

  //обнавление токена
  updateToken() {
    return fetch(`${this.url}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      }),
    })
    .then(res => this._checkResponse(res));
  };

  //выход из системы
  logout() {
    return fetch(`${this.url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      }),
    })
    .then(res => this._checkResponse(res));
  };

  //получение данных о пользователе
  getUser() {
    return fetch(`${this.url}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${getCookie('token')}`,
      },
    })
    .then(res => this._checkResponse(res));
  };

  //обновление данных пользователя
  updateUser(name: string, email: string, password: string) {
  return fetch(`${this.url}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + `${getCookie('token')}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
  .then(res => this._checkResponse(res));
};
}
    
const api = new Api(BASE_URL);

export default api;