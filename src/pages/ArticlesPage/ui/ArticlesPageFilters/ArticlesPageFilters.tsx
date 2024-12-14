import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector
} from "entities/Article";
import { ArticleType } from "entities/Article/model/types/article";
import {
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { fetchArticles } from "pages/ArticlesPage/model/services/fetchArticles";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import styles from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({ className }: ArticlesPageFiltersProps) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const sort = useSelector(getArticlesPageSort);
  const page = useSelector(getArticlesPageNum);
  const type = useSelector(getArticlesPageType);
  const { t } = useTranslation();

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ page }));
  }, [dispatch, page]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );
  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setPage(1));
      dispatch(articlesPageActions.setSort(sort));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setPage(1));
      dispatch(articlesPageActions.setOrder(order));
      fetchData();
    },
    [dispatch, fetchData]
  );
  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setPage(1));
      dispatch(articlesPageActions.setSearch(search));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch]
  );

  const onChangeType = useCallback(
    (type: ArticleType) => {
      dispatch(articlesPageActions.setPage(1));
      dispatch(articlesPageActions.setType(type));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames("", {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} changeView={onChangeView} />
      </div>
      <Card className={styles.search}>
        <Input placeholder={t("Поиск")} onChange={onChangeSearch} value={search} />
      </Card>
      <ArticleTypeTabs value={type} onChangeTab={onChangeType} className={styles.tabs} />
    </div>
  );
};
