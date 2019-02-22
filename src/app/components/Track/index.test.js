import React from "react";
import { shallow } from "enzyme";
import Track from "./index";

let component;
let props;

beforeEach(() => {
  props = {
    name: "track name",
    image: "some url",
    album: "album name",
    artists: [{ name: "some artist" }, { name: "other artist" }],
    time: 60000
  };

  component = shallow(<Track {...props} />);
});

describe("<Track />", () => {
  describe("when a track is rendered", () => {
    test("renders track image", () => {
      const image = component.find('[data-test="track-image"]').props().src;

      expect(image).toEqual(props.image);
    });

    test("renders track name", () => {
      const name = component.find('[data-test="track-name"]').props().children;

      expect(name).toEqual(props.name);
    });

    test("renders track album", () => {
      const album = component.find('[data-test="track-album"]').props()
        .children;

      expect(album).toEqual(props.album);
    });

    test("renders track artists separated by comma", () => {
      const artists = component.find('[data-test="track-artists"]').props()
        .children;

      expect(artists).toEqual("some artist, other artist");
    });

    test("renders track time in minutes", () => {
      const time = component.find('[data-test="track-time"]').props().children;

      expect(time).toEqual("1:00");
    });
  });
});
