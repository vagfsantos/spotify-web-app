import gateway from "../../app/services/gateway";
import END_POINTS from "../../app/enums/end-points";

export const GET_USER_DATA = "GET_USER_DATA";

const getUserData = payload => {
  return {
    type: GET_USER_DATA,
    payload
  };
};

export const getUserDataAsync = () => dispatch => {
  gateway
    .get(END_POINTS.USER_PROFILE)
    .then(userData => dispatch(getUserData(userData)));
};
