import styles from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleList, ArticleView } from "entities/Article";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames(styles.pageWrapper, {}, [className])}>
      <ArticleList articles={[]} isLoading={false} view={ArticleView.LIST} />
    </div>
  );
};

export default memo(ArticlesPage);
