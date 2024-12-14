import styles from "./ArticleSortSelector.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useMemo } from "react";
import { ArticleSortField } from "../../types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { onChangeOrder, onChangeSort, order, sort, className } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: "asc", label: t("возрастанию") },
      { value: "desc", label: t("убыванию") }
    ],
    [t]
  );

  const sortFiledOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, label: t("дате создания") },
      { value: ArticleSortField.TITLE, label: t("названию") },
      { value: ArticleSortField.VIEWS, label: t("просмотрам") }
    ],
    [t]
  );

  return (
    <div className={classNames(styles.articleSortSelector, {}, [className])}>
      <Select
        label={t("Сортировать ПО")}
        options={sortFiledOptions}
        currentValue={sort}
        onChangeValue={onChangeSort}
      />
      <Select
        label={t("по")}
        options={orderOptions}
        currentValue={order}
        onChangeValue={onChangeOrder}
      />
    </div>
  );
};
