import { GET_USER_DATA } from "../actions/user";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
