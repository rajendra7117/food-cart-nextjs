import React, { useState } from "react";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("sorry something went wrong, please try again later");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  };

  console.log(isLoading)

  return [isLoading, isError, data, fetchData];
};


export default useFetch