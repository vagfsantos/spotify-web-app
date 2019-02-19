import React from "react";
import { shallow } from "enzyme";
import Auth from "./index";
import auth from "../../services/auth";

jest.mock("../../services/auth", () => ({
  setToken: jest.fn()
}));

describe("<Auth />", () => {
  describe("when enter /auth route", () => {
    describe("and a token is provided", () => {
      const token = "123token";
      const fakeURIhash = `#token=${token}&param=123&other_param=jhhkti6`;

      test("retrieves token from URI hash", () => {
        window.location.hash = fakeURIhash;

        shallow(<Auth />);

        expect(auth.setToken).toHaveBeenCalledWith(token);
      });

      test("redirects users to / path", () => {
        window.location.hash = fakeURIhash;

        const component = shallow(<Auth />);

        expect(component.find("Redirect[to='/']").exists()).toBeTruthy();
      });
    });

    describe("and a token is not provided", () => {
      test("alerts an error to the user", () => {
        window.location.hash = "";
        window.alert = jest.fn();

        shallow(<Auth />);

        expect(window.alert).toHaveBeenCalled();
      });

      test("redirects users to /login path", () => {
        window.location.hash = "";

        const component = shallow(<Auth />);

        expect(component.find("Redirect[to='/login']").exists()).toBeTruthy();
      });
    });
  });
});
