import { useEffect } from "react";

function useAsyncEffect(func: () => Promise<void>, depArray: any[]) {
  useEffect(() => {
    func();
  }, depArray);
}

export default useAsyncEffect;
