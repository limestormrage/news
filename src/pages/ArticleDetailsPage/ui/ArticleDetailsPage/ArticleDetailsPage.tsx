import styles from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer } from "../../model/slice/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewCommentForm } from "features/addNewComment";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducersList: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (comment: string) => {
      dispatch(addCommentForArticle(comment));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(styles.pageWrapper, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames(styles.pageWrapper, {}, [className])}>
        <ArticleDetails id={id} />
        <div className={styles.commentsWrapper}>
          <Text title={t("Комментарии")} />
          <AddNewCommentForm onSendComment={onSendComment} />
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
