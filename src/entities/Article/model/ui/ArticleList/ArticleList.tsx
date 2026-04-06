import styles from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text/Text";
import { HTMLAttributeAnchorTarget } from "react";
import { AutoSizer, List, ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "widgets/PageWrapper/PageWrapper";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 9)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticleList = (props: ArticleListProps) => {
  const { articles, isLoading, view = ArticleView.LIST, target, className } = props;
  const { t } = useTranslation();

  const isBig = view === ArticleView.PLATE;

  const itemsPerRow = isBig ? 1 : 3;

  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={"str" + i}
          className={styles.card}
        />
      );
    }
    return (
      <div key={key} style={style} className={styles.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames("", {}, [className, styles[view]])}>
        <Text title={t("Статьи не найдены")} size={TextSize.L} />
      </div>
    );
  }

  return (
    // <div className={classNames("", {}, [className, styles[view]])}>
    //   {articles.length > 0 ? articles.map(renderArticle) : null}
    //   {isLoading && getSkeletons(view)}
    // </div>
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) || undefined}>
      {({ height, width, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        <div className={classNames("", {}, [className, styles[view]])} ref={registerChild}>
          <List
            height={height}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRender}
            width={width}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
};
