import styles from "./Card.module.scss";
import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(styles.cardWrapper, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
