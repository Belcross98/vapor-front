import { useEffect, useRef } from "react";

function useDebounce(func, value, delay = 1000) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      func();
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value]);
}

export default useDebounce;
