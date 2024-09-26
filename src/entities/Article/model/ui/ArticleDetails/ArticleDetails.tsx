import styles from "./ArticleDetails.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import {
  DynamicModuleLoader,
  ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailReducer } from "../../slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { memo, useEffect } from "react";
import { fetchArticleById } from "../../services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from "../../selectors/articleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailReducer
};

const renderBlock = (block: ArticleBlock) => {
  if (block.type === ArticleBlockType.CODE) {
    return <ArticleCodeBlockComponent className={styles.block} block={block} key={block.id} />;
  }

  if (block.type === ArticleBlockType.IMAGE) {
    return <ArticleImageBlockComponent className={styles.block} block={block} key={block.id} />;
  }

  if (block.type === ArticleBlockType.TEXT) {
    return <ArticleTextBlockComponent className={styles.block} block={block} key={block.id} />;
  }

  return <></>;
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);
  const { t } = useTranslation();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div>
          <Skeleton className={styles.avatar} width={200} height={200} radius={"50%"} />
          <Skeleton className={styles.title} width={300} height={32} />
          <Skeleton className={styles.skeleton} width={600} height={24} />
          <Skeleton className={styles.skeleton} width={"100%"} height={200} />
          <Skeleton className={styles.skeleton} width={"100%"} height={200} />
        </div>
      );
    }
    if (error) {
      return <Text align={TextAlign.CENTER} title={t("Произошла ошибка при загрузке статьи")} />;
    }

    if (!article) {
      return <></>;
    }

    return (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article.img} />
        </div>
        <Text
          className={styles.title}
          title={article.title}
          text={article.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Icon={EyeIcon} />
          <Text text={String(article.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Icon={CalendarIcon} />
          <Text text={article.createdAt} />
        </div>
        {article.blocks.map(renderBlock)}
      </>
    );
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.articleDetails, {}, [className])}>{renderContent()}</div>
    </DynamicModuleLoader>
  );
});

ArticleDetails.displayName = "ArticleDetails";
