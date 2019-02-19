export const STORAGE_KEY = "MY-SPOT-STORAGE-TOKEN";

export class Auth {
  constructor(storage) {
    this._storage = storage;
  }

  getToken() {
    return this._storage.getItem(STORAGE_KEY);
  }

  setToken(token) {
    this._storage.setItem(STORAGE_KEY, token);
  }
}

export default new Auth(window.localStorage);
