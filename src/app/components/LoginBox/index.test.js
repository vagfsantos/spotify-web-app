import React from "react";
import { shallow } from "enzyme";
import LoginBox from "./index";

describe("<LoginBox />", () => {
  test("calls callback when click login button", () => {
    const callback = jest.fn();
    const component = shallow(<LoginBox onLogin={callback} />);

    component.find("[data-test='login-button']").simulate("click");

    expect(callback).toHaveBeenCalled();
  });
});
