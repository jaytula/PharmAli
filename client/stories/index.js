import React from 'react'

import { storiesOf } from "@storybook/react";

import Button from "components/Button";

// Test Button
storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button />)
