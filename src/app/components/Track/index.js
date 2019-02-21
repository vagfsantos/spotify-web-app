import React from "react";
import Favorite from "@material-ui/icons/Favorite";
import {
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import {
  Track,
  Image,
  TrackTitle,
  AlbumName,
  ArtirtNames
} from "./index.styles";
import { msToMinutes, formatArtists } from "../../helpers";

export default ({ name, image, album, artists = [], time }) => (
  <Track>
    <ListItemAvatar>
      <Image src={image} />
    </ListItemAvatar>

    <ListItemText>
      <div>
        <TrackTitle>
          {name} <sup>{msToMinutes(time)}</sup>
        </TrackTitle>
        <AlbumName>{album}</AlbumName>
        <ArtirtNames>{formatArtists(artists)}</ArtirtNames>
      </div>
    </ListItemText>

    <ListItemSecondaryAction>
      <IconButton>
        <Favorite />
      </IconButton>
    </ListItemSecondaryAction>
  </Track>
);
