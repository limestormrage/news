import styles from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "../../types/article";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import ViewIcon from "shared/assets/icons/eye.svg";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const types = <Text text={article.type.join(", ")} className={styles.types} />;

  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Icon={ViewIcon} />
    </>
  );

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.LIST) {
    const firstTextBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            {article.user.avatar && <Avatar size={30} src={article.user.avatar} />}
            <Text className={styles.username} text={article.user.username} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          <img className={styles.image} src={article.img} alt={article.title} />
          {firstTextBlock && (
            <ArticleTextBlockComponent className={styles.textBlock} block={firstTextBlock} />
          )}
          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t("Читать далее...")}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
      <Card onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} className={styles.image} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
};
