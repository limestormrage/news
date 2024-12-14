import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";
import { action } from "@storybook/addon-actions";
import { ArticleType } from "../../types/article";

const meta: Meta<typeof ArticleTypeTabs> = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeTab: action("onTabClick")
  }
};
