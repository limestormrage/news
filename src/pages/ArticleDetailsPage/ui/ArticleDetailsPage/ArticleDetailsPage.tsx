import styles from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");
  return <div className={classNames(styles.pageWrapper, {}, [className])}>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
