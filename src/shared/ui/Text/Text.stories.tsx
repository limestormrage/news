import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextSize, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Normal: Story = {
  args: {
    title: "Title lorem",
    text: "Text lorem"
  }
};
export const Error: Story = {
  args: {
    title: "Title lorem",
    text: "Text lorem",
    theme: TextTheme.ERROR
  }
};
export const OnlyTitle: Story = {
  args: {
    title: "Title lorem"
  }
};
export const OnlyText: Story = {
  args: {
    text: "Text lorem"
  }
};
export const NormalDark: Story = {
  args: {
    title: "Title lorem",
    text: "Text lorem"
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const OnlyTitleDark: Story = {
  args: {
    title: "Title lorem"
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const OnlyTextDark: Story = {
  args: {
    text: "Text lorem"
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
export const SizeL: Story = {
  args: {
    title: "Title lorem",
    text: "Text lorem",
    size: TextSize.L
  }
};
