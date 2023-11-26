import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkICon from "shared/assets/icons/theme-dark.svg";
import { AppButton, ThemeButton } from "shared/ui/AppButton/AppButton";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkICon />}
    </AppButton>
  );
};
