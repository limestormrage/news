import { classNames } from "shared/lib/classNames/classNames";
import styles from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard
            className={styles.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text title={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
};
