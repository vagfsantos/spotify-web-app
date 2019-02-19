import END_POINTS from "../enums/end-points";
import auth from "./auth";

const { BASE_URL, USER_PROFILE } = END_POINTS;

export class Gateway {
  async fetchUserData() {
    return fetch(`${BASE_URL}${USER_PROFILE}`, {
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: "application/json"
      }
    })
      .then(this._onTokenExpires)
      .then(response => response.json())
      .catch(this._redirectToLogin);
  }

  _redirectToLogin = () => window.location.assign("/login");

  _onTokenExpires = response => {
    if (response.status === 401) {
      return this._redirectToLogin();
    }

    return response;
  };
}

export default new Gateway();
