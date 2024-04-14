import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./SideBar.module.scss";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sideBar, { [styles.sideBarCollapsed]: collapsed }, [className])}
    >
      <Button
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.links}>
        <AppLink className={styles.link} to={RoutePath.main} theme={AppLinkTheme.INVERTED}>
          <MainIcon className={styles.linkIcon} />
          <span className={styles.linkText}>{t("Главная")}</span>
        </AppLink>

        <AppLink className={styles.link} to={RoutePath.about} theme={AppLinkTheme.INVERTED}>
          <AboutIcon className={styles.linkIcon} />
          <span className={styles.linkText}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
