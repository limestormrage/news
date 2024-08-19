import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { SideBar } from "./SideBar";

const meta: Meta<typeof SideBar> = {
  title: "widgets/SideBar",
  component: SideBar,

  tags: ["autodocs"],

  argTypes: {},
  decorators: [
    StoreDecorator({
      user: { authData: {} }
    })
  ]
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  args: {}
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const noAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: {}
    })
  ]
};
