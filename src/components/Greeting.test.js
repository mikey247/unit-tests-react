import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting", () => {
  test(" Hello World renders", () => {
    // Arrange
    render(<Greeting />);

    //Act

    //   Assertion
    const element = screen.getByText(/Hello World/i);

    expect(element).toBeInTheDocument();
  });

  test("true text renders", () => {
    render(<Greeting />);

    const falseElement = screen.getByText(/false text/i);
    expect(falseElement).toBeInTheDocument();
    //
    //
  });

  test("false text if button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Action
    // action here is in the event that the button is clicked and the function is triggered ,the fuction changes the state to true

    //  const buttonElement1 = screen.getByText(/change text/i)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assertion
    const trueElement = screen.getByText(/true text/i);
    expect(trueElement).toBeInTheDocument();
  });

  test("hey everybody does not appear when button is clicked", () => {
    //Arrange
    render(<Greeting />);

    //Action

    //  const buttonElement1 = screen.getByText(/change text/i)
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assertion
    const lement = screen.queryByText("hey everybody");
    expect(lement).not.toBeInTheDocument();
  });
});
