import styles from "./SideBarItem.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { SideBarItemType } from "../../model/items";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(styles.link, { [styles.sideBarCollapsed]: collapsed })}
      to={item.path}
      theme={AppLinkTheme.INVERTED}
    >
      <item.Icon className={styles.linkIcon} />
      <span className={styles.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});

SideBarItem.displayName = "SideBarItem";
