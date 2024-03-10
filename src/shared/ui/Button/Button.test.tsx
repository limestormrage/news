import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";

describe("Button", () => {
  test("render button", () => {
    const BUTTON_TEXT = "Test";
    render(<Button>{BUTTON_TEXT}</Button>);
    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });
});
