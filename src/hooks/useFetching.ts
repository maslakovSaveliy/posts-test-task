import { useState } from "react";
export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } finally {
      setIsLoading(false);
    }
  };
  return { fetching, isLoading };
};
