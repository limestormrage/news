import { MutableRefObject, ReactNode, useRef, UIEvent } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./PageWrapper.module.scss";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollByPath, scrollSaveSliceActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper = ({ className, children, onScrollEnd }: PageWrapperProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveSliceActions.setScroll({
        path: pathname,
        position: e.currentTarget.scrollTop
      })
    );
  };

  const onScrollThrottle = useThrottle(onScroll, 500);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <div
      className={classNames(styles.pageWrapper, {}, [className])}
      ref={wrapperRef}
      onScroll={onScrollThrottle}
    >
      {children}
      {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
    </div>
  );
};
