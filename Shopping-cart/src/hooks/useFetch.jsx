// im gone suppose to use this but i got too lazy so nah im good cuhzz
import { useEffect, useState } from "react";
const UseFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error(`Error fetching data, status ${response.status}`);
      }
      const result = await response.json();
      if (result) {
        setData(result);
        setErr(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr(error);
    }
    return { data, loading, err };
  };

  useEffect(() => {
    fetchData();
  }, [url, options]);
  return { data, loading, err };
};

export default UseFetch;
