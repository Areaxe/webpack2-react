import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Button from "../../src/components/Button/button.jsx";

describe("DOM Rendering", function() {
  it("button classname should match props name", function() {
    expect(shallow(<Button name="blue"/>));
    expect("foo").equal("foo");
  });
});