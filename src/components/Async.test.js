import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async suite", () => {
  test("test", async () => {
    //mocks are used to simulate succes cases for functions we don't want to run constantly
    window.fetch = jest.fn();

    // mockResolvedValueOnce  is a method that allows us to set a value we are expecting from the function we want to mock, for example here we're trying to mock the 'fetch' function to which we're expecting an object with a json property....the json property has a value which is an async function that would returns an array of objects

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    //Arrange
    render(<Async />);

    //Assert
    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).not.toHaveLength(0);
  });
});
