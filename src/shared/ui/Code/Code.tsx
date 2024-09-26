import styles from "./Code.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CopyIcon from "shared/assets/icons/copy.svg";
import { useCallback } from "react";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({ text, className }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.codeWrapper, {}, [className])}>
      <Button className={styles.copyButton} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
