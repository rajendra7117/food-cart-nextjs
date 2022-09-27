import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../hooks/fetchHook";
import Item from "../FoodItems/Item";
const Results = () => {
  const router = useRouter();

  let query = router.query.searchQuery;

  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }, [query]);

  console.log(isLoading, data, isError);

  let content;
  if (isLoading) {
    content = <h2>Loading...</h2>;
  }
  if (isError) {
    content = <h2>sorry something went wrong please try again later!</h2>;
  }
  if (data.meals) {
    content = <Item id={data.meals[0].idMeal} key={data.meals[0].idMeal} img={data.meals[0].strMealThumb} title={data.meals[0].strMeal}/>
  }
  return <div className="flex-col">
    {content}
  </div>;
};

export default Results;
