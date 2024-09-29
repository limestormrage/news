import { Comment } from "../../model/types/comment";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./CommentCard.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

const DEFAULT_AVATAR =
  "https://avatars.mds.yandex.net/i?id=cdd2118847bdf54d693018aea956e90b_l-8182686-images-thumbs&n=13";

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  const avatarUrl = comment.user.avatar || DEFAULT_AVATAR;

  if (isLoading) {
    return (
      <div className={classNames(styles.commentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton radius="50%" height={30} width={30} />
          <Skeleton width={150} height={16} />
        </div>
        <Skeleton className={styles.text} width="100%" height="50px" />
      </div>
    );
  }

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <div className={styles.header}>
        <Avatar size={30} src={avatarUrl} />
        <Text title={comment.user.username} />
      </div>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
};
