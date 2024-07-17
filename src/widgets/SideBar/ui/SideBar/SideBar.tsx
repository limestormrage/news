import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./SideBar.module.scss";
import { SideBarItemsList } from "../../model/items";
import { SideBarItem } from "../SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const menuLinks = useMemo(
    () =>
      SideBarItemsList.map((item) => (
        <SideBarItem key={item.text} item={item} collapsed={collapsed} />
      )),
    [collapsed]
  );

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
      <div className={styles.links}>{menuLinks}</div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";
