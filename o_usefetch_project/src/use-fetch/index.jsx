import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  // three states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const result = await res.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
