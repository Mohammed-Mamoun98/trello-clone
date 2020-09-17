import React, { useState, useEffect } from "react";

export default function useFetch(url, method, deps) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, serError] = useState("");

  const abortController = new AbortController();

  const fetchData = async () => {
    setLoading(true);
    try {
      const rawResponse = await fetch(url, {
        method,
        signal: abortController.signal,
      });
      const response = await rawResponse.json();
      setLoading(false);

      setData(response);
    } catch (error) {
      // setLoading(false);
      serError(error);
    }
  };

  useEffect(() => {
    if (loaded) fetchData();

    return () => {
      abortController.abort();
      setLoading(true);
    };
  }, [deps[0], url, loaded]);

  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return { data, loading, error, url };
}
