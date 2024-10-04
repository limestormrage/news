import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const COMMENTS = [
  {
    id: "1",
    text: "hello world",
    user: { id: "1", username: "Vasya" }
  },
  {
    id: "2",
    text: "hello world 2",
    user: { id: "1", username: "Nikita" }
  }
];

const meta: Meta<typeof CommentList> = {
  title: "entities/Comment/CommentList",
  component: CommentList,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    comments: COMMENTS
  }
};
export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true
  }
};
