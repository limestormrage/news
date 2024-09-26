import styles from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import { ArticleCodeBlock } from "../../types/article";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ block, className }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(styles.articleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
