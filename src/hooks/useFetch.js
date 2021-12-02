import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error(response.status);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData(url);
  }, [url]);
  return data;
};

export default useFetch;
