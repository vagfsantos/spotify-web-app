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
      <Image src={image} data-test="track-image" />
    </ListItemAvatar>

    <ListItemText>
      <div>
        <TrackTitle>
          <span data-test="track-name">{name}</span>{" "}
          <sup data-test="track-time">{msToMinutes(time)}</sup>
        </TrackTitle>
        <AlbumName data-test="track-album">{album}</AlbumName>
        <ArtirtNames data-test="track-artists">
          {formatArtists(artists)}
        </ArtirtNames>
      </div>
    </ListItemText>

    <ListItemSecondaryAction>
      <IconButton>
        <Favorite />
      </IconButton>
    </ListItemSecondaryAction>
  </Track>
);
