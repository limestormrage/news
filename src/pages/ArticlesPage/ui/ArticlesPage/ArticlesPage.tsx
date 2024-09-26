import styles from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return <div className={classNames(styles.pageWrapper, {}, [className])}></div>;
};

export default memo(ArticlesPage);
