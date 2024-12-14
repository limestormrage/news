import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeTab: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ className, value, onChangeTab }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const onClickType = useCallback(
    (tab: TabItem) => {
      onChangeTab(tab.value as ArticleType);
    },
    [onChangeTab]
  );

  const TABS = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("Все статьи")
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("Экономика")
      },
      {
        value: ArticleType.IT,
        content: t("Айти")
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Наука")
      }
    ],
    [t]
  );

  return (
    <Tabs
      className={classNames("", {}, [className])}
      tabs={TABS}
      onChangeTab={onClickType}
      currentValue={value}
    />
  );
};
