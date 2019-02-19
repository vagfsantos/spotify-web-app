import gateway from "../../app/services/gateway";

export const GET_USER_DATA = "GET_USER_DATA";

const getUserData = payload => {
  return {
    type: GET_USER_DATA,
    payload
  };
};

export const getUserDataAsync = () => async dispatch => {
  const userData = await gateway.fetchUserData();
  dispatch(getUserData(userData));
};
