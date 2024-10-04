import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AddNewCommentForm from "./AddNewCommentForm";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof AddNewCommentForm> = {
  title: "features/AddNewCommentForm",
  component: AddNewCommentForm,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof AddNewCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: action("onSendComment")
  },
  decorators: [StoreDecorator({})]
};
