import React, { useEffect } from "react";
import useFetch from "../hooks/fetchHook";
import Item from "./Item";
const FoodItems = ({ category }) => {
  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }, []);

  console.table(data.meals);
  return (
    <div className="grid">
      {data.meals?.map((item) => (
        <Item
          id={item.idMeal}
          key={item.idMeal}
          img={item.strMealThumb}
          title={item.strMeal}
        />
      ))}
    </div>
  );
};

export default FoodItems;
