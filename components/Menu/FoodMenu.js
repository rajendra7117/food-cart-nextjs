import React, { useEffect, useState } from "react";
import Category from "./Category";
import styles from "../../styles/Categories.module.css";
import useFetch from "../hooks/fetchHook";
const FoodMenu = () => {
  const [menu, setMenu] = useState([]);

  const [isLoading, isError, data, fetchData] = useFetch();

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }, []);

  let content;

  console.log(isLoading, isError, data);
  if (isLoading) {
    content = <h2>Loading...</h2>;
  }
  if (isError) {
    content = <h2>sorry something went wrong please try again later!</h2>;
  }
  if (data) {
    content = data.categories?.map((cat) => (
      <Category
        id={cat.idCategory}
        key={cat.idCategory}
        title={cat.strCategory}
        img={cat.strCategoryThumb}
      />
    ));
  }
  return (
    <div className={styles.menu}>
      <div className="grid">{content}</div>
    </div>
  );
};

export default FoodMenu;
