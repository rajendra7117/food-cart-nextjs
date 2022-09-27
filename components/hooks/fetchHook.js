import React, { useState } from "react";
import axios from "axios";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);

      if (response.status !== 200) {
        throw new Error("sorry something went wrong, please try again later");
      }
    if(response.data.meals===null){
      throw new Error('sorry category not found with the given qeury')
    }

      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      console.log('error')
    }
  };

  return [isLoading, isError, data, fetchData];
};

export default useFetch;
