import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("render", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  test("increment", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  });
  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId("decrement-button"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  });
});
