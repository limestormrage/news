import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <span className={classNames(styles.loader, {}, [className])}></span>;
};
