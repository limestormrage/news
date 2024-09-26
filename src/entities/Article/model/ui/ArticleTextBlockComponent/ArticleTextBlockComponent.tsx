import styles from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../types/article";
import { Text } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({ block, className }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames("", {}, [className])}>
      {block.title && <Text title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={styles.paragraph} text={paragraph} key={paragraph} />
      ))}
    </div>
  );
};
