import React from "react";

import { render, cleanup } from "@testing-library/react";

import Navbar from "components/Navbar";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Navbar />);
});