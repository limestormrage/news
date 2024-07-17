import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted"
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button = memo(
  ({
    children,
    className,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  }: IButtonProps): JSX.Element => {
    const mods: Record<string, boolean> = {
      [styles.square]: square
    };

    return (
      <button
        className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
        {...otherProps}
        type="button"
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
