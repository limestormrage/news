import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";
import AvatarImage from "shared/assets/tests/storybookAvatar.jpg";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,

  tags: ["autodocs"],

  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "limestormrage",
      first: "Dmitry",
      currency: Currency.RUB,
      avatar: AvatarImage
    }
  }
};
export const IsError: Story = {
  args: {
    error: "true"
  }
};
export const Loading: Story = {
  args: {
    isLoading: true
  }
};
