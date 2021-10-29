import { useCallback, useState } from "react";

/**
 * React hook to keep track of state when making requests (API calls)
 */
const useRequestState = () => {
  const [loading, setLoading] = useState(false);

  const start = useCallback(() => {
    setLoading(true);
  }, []);

  const end = useCallback(() => {
    setLoading(false);
  }, []);

  return {
    loading,
    start,
    end,
  };
};

export default useRequestState;
