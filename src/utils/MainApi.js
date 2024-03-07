import { CONFIG_API } from "./constants";

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._authHeaders = null;
  }

  //UTIL CLASS METHODS

  setAuthHeaders(token) {
    this._authHeaders = {
      ...this._headers,
      authorization: `Bearer ${token}`,
    };
  }

  _onResponse(res) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  }

  //USER CLASS METHODS

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._authHeaders,
    }).then(this._onResponse);
  }

  changeUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._authHeaders,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._onResponse);
  }

  //MOVIES CLASS METHODS

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._authHeaders,
    }).then(this._onResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._authHeaders,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._onResponse);
  }

  deleteSavedMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._authHeaders,
    });
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._onResponse);
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._onResponse);
  }
}

const api = new Api(CONFIG_API);
export default api;
