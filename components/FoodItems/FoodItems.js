import React, { useEffect } from "react";
import useFetch from "../hooks/fetchHook";
import Item from "./Item";

const FoodItems = ({ category }) => {
  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }, [category]);

 
  return (
    <div className="grid-2">
      {isError ? (
        <h1>Sorry something went wrong!</h1>
      ) : (
        <>
          {isLoading ? (
            <h2>loading...</h2>
          ) : (
            <>
              {data.meals?.map((item) => (
                <Item
                  id={item.idMeal}
                  key={item.idMeal}
                  img={item.strMealThumb}
                  title={item.strMeal}
                />
              ))}{" "}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FoodItems;
