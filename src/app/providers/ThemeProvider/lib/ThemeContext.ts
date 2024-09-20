import { createContext } from "react";

export enum Theme {
  LIGHT = "app-light-theme",
  DARK = "app-dark-theme",
  ORANGE = "app-orange-theme"
}

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
