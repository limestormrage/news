import styles from "./AppButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const AppButton: FC<IAppButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}): JSX.Element => {
  return (
    <button
      className={classNames(styles.appButton, {}, [className, styles[theme]])}
      {...otherProps}
      type="button"
    >
      {children}
    </button>
  );
};
