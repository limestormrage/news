// import { MutableRefObject, useEffect } from "react";

// interface useInfiniteScroll {
//   callback?: () => void;
//   triggerRef: MutableRefObject<HTMLElement>;
//   wrapperRef: MutableRefObject<HTMLElement>;
// }

// export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: useInfiniteScroll) {
//   useEffect(() => {
//     let observer: IntersectionObserver | null = null;
//     const wrapperElement = wrapperRef.current;
//     const triggerElement = triggerRef.current;

//     if (callback) {
//       const options = {
//         root: wrapperElement,
//         rootMargin: "1px",
//         threshold: 1.0
//       };

//       observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           callback();
//         }
//       }, options);

//       observer.observe(triggerElement);
//     }

//     return () => {
//       if (observer && triggerElement) {
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         observer.unobserve(triggerElement);
//       }
//     };
//   }, [callback, triggerRef, wrapperRef]);
// }

import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1.0
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);
    }

    return () => {
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
