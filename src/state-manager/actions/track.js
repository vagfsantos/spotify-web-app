import gateway from "../../app/services/gateway";
import END_POINTS from "../../app/enums/end-points";

export const GET_TRACK = "GET_TRACK";

const getTrack = payload => {
  return {
    type: GET_TRACK,
    payload
  };
};

export const getTrackAsync = query => dispatch => {
  gateway
    .get(`${END_POINTS.SEARCH}?q=${query}&type=track`)
    .then(response => dispatch(getTrack(response.tracks.items)));
};
