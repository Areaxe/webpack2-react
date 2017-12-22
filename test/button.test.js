import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Button from "../src/components/Button/button";

describe("DOM Rendering", function() {
  it("button classname should match props name", function() {
    const button = shallow(<Button name="blue"/>);
    expect(button.find("button.btn-blue")).to.have.length(1);
  });
});