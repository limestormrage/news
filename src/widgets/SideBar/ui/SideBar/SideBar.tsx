import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.sideBar, { [styles.sideBarCollapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle} type="button">
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
