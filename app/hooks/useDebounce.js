import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutIdRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...arg) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
  return debouncedCallback;
};

export default useDebounce;
