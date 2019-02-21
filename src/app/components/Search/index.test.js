import React from "react";
import { shallow } from "enzyme";
import Search from "./index";

describe("<Search />", () => {
  describe("when search form is sent", () => {
    test("calls callback with query and type", () => {
      const callback = jest.fn();
      const query = "some track";
      const type = "track";
      const component = shallow(<Search onSearch={callback} />);

      component.find("[data-test='query-input']").simulate("change", {
        target: { value: query }
      });

      component.find("[data-test='radios']").simulate("change", {
        target: {
          value: type
        }
      });

      component.find("[data-test='form']").simulate("submit", {
        preventDefault() {}
      });

      expect(callback).toHaveBeenCalledWith(query, type);
    });
  });
});
