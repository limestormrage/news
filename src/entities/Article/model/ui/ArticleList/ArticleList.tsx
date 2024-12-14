import styles from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text/Text";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = (props: ArticleListProps) => {
  const { articles, isLoading, view = ArticleView.LIST, className } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames("", {}, [className, styles[view]])}>
        <Text title={t("Статьи не найдены")} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames("", {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
