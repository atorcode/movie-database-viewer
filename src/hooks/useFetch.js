import { useState } from "react";
const useFetch = () => {
  const [data, setData] = useState([]);
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
  return { fetchData, data };
};

export default useFetch;
