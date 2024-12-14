import styles from "./Card.module.scss";
import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined"
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  theme?: CardTheme;
}

export const Card = ({
  children,
  className,
  theme = CardTheme.NORMAL,
  ...otherProps
}: CardProps) => {
  return (
    <div className={classNames(styles.cardWrapper, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </div>
  );
};
