import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={"/"} theme={AppLinkTheme.INVERTED}>
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.INVERTED}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
