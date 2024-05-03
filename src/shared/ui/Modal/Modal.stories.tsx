import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,

  tags: ["autodocs"],

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
  args: {
    isOpen: true,
    children: "Тестовый текст внутри модалки",
  },
};
export const Dark: Story = {
  args: {
    isOpen: true,
    children: "Тестовый текст внутри модалки",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
