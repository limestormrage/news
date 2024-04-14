import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";

describe("SideBar", () => {
  test("render sidebar", () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toggle sidebar", () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("sideBarCollapsed");
  });
});
