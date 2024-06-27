import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,

  tags: ["autodocs"],

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "test",
        password: "testtest",
      },
    }),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "test",
        password: "testtest",
        error: "Error",
      },
    }),
  ],
};
export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: "test",
        password: "testtest",
        isLoading: true,
      },
    }),
  ],
};
