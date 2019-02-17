const CLIENT_ID = "b228341a86e142249dfd101b4b6bc501";
const REDIRECT_URI = "http://localhost:3000/auth";

export const SPOTIFY_AUTH_URI = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`;
