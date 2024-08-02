import styles from "./Avatar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
  src: string;
  className?: string;
  size: number;
  alt?: string;
}

export const Avatar = ({ src, className, size, alt }: AvatarProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  );
  return (
    <img src={src} className={classNames(styles.avatar, {}, [className])} style={style} alt={alt} />
  );
};
