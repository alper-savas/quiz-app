import { useState, useEffect, useRef } from "react";

const baseURL = "https://opentdb.com/api.php?amount=15";

const useFetch = (configData) => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const shouldRender = useRef(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseURL} ${configData}`);
        if (!response.ok) {
          throw new Error(`Http error occured. Status: ${response.status}`);
        }
        const data = await response.json();
        setResponseData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setResponseData(null);
      } finally {
        setLoading(false);
      }
    };
    if (shouldRender.current) {
      shouldRender.current = false;
      getData();
    }
  }, [configData]);

  return { responseData: responseData, loading: loading, error: error };
};

export default useFetch;
