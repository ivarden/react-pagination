import React from "react";
import { render, screen } from "@testing-library/react";
import Variant01 from "./";

test("renders React pagination variant-01", () => {
  render(<Variant01 />);
  const linkElement = screen.getByText(/React pagination variant-01/i);
  expect(linkElement).toBeInTheDocument();
});
