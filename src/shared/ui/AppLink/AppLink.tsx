import styles from "./AppLink.module.scss";
import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}): JSX.Element => {
  return (
    <Link className={classNames(styles.appLink, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
