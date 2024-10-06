import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="Test" text="test test" />
  }
};
