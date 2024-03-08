import { render, screen } from "@testing-library/react";
import { AppButton } from "shared/ui/AppButton/AppButton";

describe("AppButton", () => {
  test("render button", () => {
    const BUTTON_TEXT = "Test";
    render(<AppButton>{BUTTON_TEXT}</AppButton>);
    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });
});
