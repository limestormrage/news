/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const isThrottling = useRef<boolean>(false);

  return useCallback(
    (...args: any[]) => {
      if (!isThrottling.current) {
        callback(...args);
        isThrottling.current = true;

        setTimeout(() => {
          isThrottling.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};
