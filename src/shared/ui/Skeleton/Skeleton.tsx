import cls from "./Skeleton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  radius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, radius, width } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: radius
  };
  return <div className={classNames(cls.skeleton, {}, [className])} style={styles}></div>;
};
