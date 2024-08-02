import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "заголовок",
    options: [
      { label: "Первый", value: "1" },
      { label: "Второй", value: "2" }
    ]
  }
};
