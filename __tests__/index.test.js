import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact", () => {
  it("renders a contact", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("contact-header")).toBeInTheDocument();
    expect(screen.getByTestId("virtuoso-component")).toBeInTheDocument();
  });
});
