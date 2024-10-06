import styles from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "../../types/article";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Skeleton radius="50%" height={30} width={30} />
            <Skeleton className={styles.username} width={150} height={16} />
            <Skeleton className={styles.date} width={150} height={16} />
          </div>
          <Skeleton className={styles.title} width={250} height={16} />

          <Skeleton className={styles.image} height={200} />

          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.image} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={styles.title} width={150} height={16} />
      </Card>
    </div>
  );
};
