export const msToMinutes = ms => {
  const time = new Date(ms);
  const seconds = time.getUTCSeconds();
  const minutes = time.getUTCMinutes();

  return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
};

export const formatArtists = (artists = []) => {
  return artists.map(a => a.name).join(", ");
};
