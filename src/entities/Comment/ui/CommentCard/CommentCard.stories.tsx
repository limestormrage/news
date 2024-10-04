import type { Meta, StoryObj } from "@storybook/react";
import { CommentCard } from "./CommentCard";

const COMMENT = {
  id: "1",
  text: "hello world",
  user: { id: "1", username: "Vasya" }
};

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: COMMENT
  }
};
export const Loading: Story = {
  args: {
    comment: COMMENT,
    isLoading: true
  }
};
