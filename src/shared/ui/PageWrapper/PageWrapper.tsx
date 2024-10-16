import { MutableRefObject, ReactNode, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageWrapper.module.scss";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper = ({ className, children, onScrollEnd }: PageWrapperProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <div className={classNames(styles.pageWrapper, {}, [className])} ref={wrapperRef}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
