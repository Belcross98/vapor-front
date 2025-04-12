import { useEffect } from "react";

function useAsyncEffect(func, depArray) {
  useEffect(() => {
    func();
  }, depArray);
}

export default useAsyncEffect;
