import styles from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...otherProps}
      type="button"
    >
      {children}
    </button>
  );
};
