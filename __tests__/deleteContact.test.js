import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Display modal delete contact", () => {
  it("renders modal add contact", () => {
    render(<Home />);
    // check if all components are rendered
    fireEvent.click(screen.getByTestId("btn-delete-contact"));
    expect.stringMatching("Delete Contact");
  });
});
