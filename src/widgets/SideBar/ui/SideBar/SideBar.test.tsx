import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/renderWithTranslation/renderWithTranslation";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";

describe("SideBar", () => {
  test("render sidebar", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle sidebar", () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("sideBarCollapsed");
  });
});
