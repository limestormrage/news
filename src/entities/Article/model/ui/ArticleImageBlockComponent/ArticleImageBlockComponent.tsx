import styles from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleImageBlock } from "../../types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(styles.articleImageBlock, {}, [className])}>
      <img className={styles.img} src={block.src} alt={block.title} />
      {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};
