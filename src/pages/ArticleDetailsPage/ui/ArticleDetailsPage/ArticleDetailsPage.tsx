import styles from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList, ArticleView } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text, TextSize } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddNewCommentForm } from "features/addNewComment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducersList: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (comment: string) => {
      dispatch(addCommentForArticle(comment));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <PageWrapper className={classNames("", {}, [className])}>
        {t("Статья не найдена")}
      </PageWrapper>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <PageWrapper className={classNames("", {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <div className={styles.commentsWrapper}>
          <Text size={TextSize.L} title={t("Рекомендуем")} />
          <ArticleList
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            view={ArticleView.PLATE}
            className={styles.recommendations}
            target={"_blank"}
          />
          <Text size={TextSize.L} title={t("Комментарии")} />
          <AddNewCommentForm onSendComment={onSendComment} />
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
