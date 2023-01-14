import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Display modal add contact", () => {
  it("renders modal add contact", () => {
    render(<Home />);
    // check if all components are rendered
    fireEvent.click(screen.getByTestId("btn-add-contact"));
    expect.stringMatching('Add Contact')
  });
});
