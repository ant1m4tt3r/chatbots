import React from "react";

import { render } from "@testing-library/react";

import Footer from "./";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });
});
