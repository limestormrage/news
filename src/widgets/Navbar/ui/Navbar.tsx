import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={"/"} theme={AppLinkTheme.INVERTED}>
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
