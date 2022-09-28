import React, { useEffect } from "react";
import useFetch from "../hooks/fetchHook";
import Loader from "../UI/Loader";
import Item from "./Item";
import styles from "../../styles/FoodItems.module.css";

const FoodItems = ({ category }) => {
  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }, [category]);

  return (
    <div className={`${styles.foodItemsContainer}`}>
      {isError ? (
        <h1>Sorry something went wrong!</h1>
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="grid-2">
                {data.meals?.map((item) => (
                  <Item
                    id={item.idMeal}
                    key={item.idMeal}
                    img={item.strMealThumb}
                    title={item.strMeal}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FoodItems;
