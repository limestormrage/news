import { Theme } from "app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
