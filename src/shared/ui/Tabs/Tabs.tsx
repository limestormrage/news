import styles from "./Tabs.module.scss";
import { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  currentValue: string;
  onChangeTab: (tab: TabItem) => void;
}

export const Tabs = ({ className, tabs, currentValue, onChangeTab }: TabsProps) => {
  const handleClickTab = useCallback(
    (tab: TabItem) => {
      return () => {
        onChangeTab(tab);
      };
    },
    [onChangeTab]
  );

  return (
    <div className={classNames(styles.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          theme={tab.value === currentValue ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={handleClickTab(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
