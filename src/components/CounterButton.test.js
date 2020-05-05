import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("expect to render CounterButton component", () => {
    const mockColor = "red";
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('has initial state["count"] = 0', () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper.state(["count"])).toEqual(0);
  });

  it("Correctly increments the counter (II way)", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });

    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 2 });

    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 3 });
  });

  it("has proper props", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper.props().color).toEqual("red");
  });
});
