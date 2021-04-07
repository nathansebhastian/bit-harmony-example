import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "./jumbotron";

describe("jumbotron", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(
      <Jumbotron
        title="Hello World"
        description="This is a jumbotron. You can use it to draw extra attention for some special content or information"
      />
    );
    const rendered = getByText("Hello World");
    expect(rendered).toBeTruthy();
  });
});
