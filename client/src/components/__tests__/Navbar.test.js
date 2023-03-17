import React from "react";

import { render, cleanup } from "@testing-library/react";

import Navbar from "../Navbar";

afterEach(cleanup);

it("renders without crashing", () => {
  const menu = false;
  render(<Navbar menu={menu} setMenu={!menu}/>);
});