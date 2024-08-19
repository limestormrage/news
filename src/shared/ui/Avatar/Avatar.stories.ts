import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImage from "shared/assets/tests/storybookAvatar.jpg";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: AvatarImage
  }
};
export const Small: Story = {
  args: {
    src: AvatarImage,
    size: 100
  }
};
