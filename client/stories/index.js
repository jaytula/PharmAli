import React from 'react'
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Navbar from "components/Navbar";
import Search from "components/Search";

// Test Navbar
storiesOf("Navbar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Opened navbar", () => <Navbar menu={true}/>)
  .add("Closed navbar", () => <Navbar menu={false}/>)
  .add("Onclick on open navbar", () => <Navbar menu={true} setMenu={action("setMenu")}/>)
  .add("Onclick on closed navbar", () => <Navbar menu={true} setMenu={action("setMenu")}/>)

// Test Search
  storiesOf("Search", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Navigate to Search", () => <Search onSubmit={action("setSearch")}/>)
  .add("Search button working", () => <Search onSubmit={action("setSearch")}/>)