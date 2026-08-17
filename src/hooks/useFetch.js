import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }

    fetch(url)
      .then(response => {

        if (!response.ok) {
          throw new Error("Unable to fetch data.");
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))

  }, [url]);

  return { data, loading, error };
  
};

export default useFetch;