import React, { useEffect, useState } from "react";
import Category from "./Category";
import styles from "../../styles/Categories.module.css";
import useFetch from "../hooks/fetchHook";
import Loader from "../UI/Loader";

const FoodMenu = () => {
  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }, []);

  return (
    <div className={styles.menu}>
      {isError ? (
        <h1>error</h1>
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid">
              {data.categories?.map((cat) => (
                <Category
                  id={cat.idCategory}
                  key={cat.idCategory}
                  title={cat.strCategory}
                  img={cat.strCategoryThumb}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FoodMenu;
