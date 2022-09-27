import React, { useState, useEffect } from "react";
import styles from "../../styles/FoodItems.module.css";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/CartSlice";
import Image from "next/image";
const Item = ({ id, title, img }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);

  // const myLoader = ({ src }) => {
  //   return `${img}`;
  // };

  const decreaseQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prev) => prev - 1);
    dispatch(
      cartSliceActions.removeFromCart({
        id,
        title,
        img,
        quantity: 1,
        price: price,
      })
    );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(
      cartSliceActions.addToCart({ id, title, img, quantity: 1, price: price })
    );
  };

  useEffect(() => {
    setPrice(_.random(100, 500));
  }, []);


  return (
    <div className={`${styles.foodItem} flex-col boxshadow-2`}>
      <Image
        src={img}
        width={300}
        height={300}
        alt="food-item"
        placeholder="loading.."
      />
      <div className={`${styles.itemDetails}`}>
        <h3>{title}</h3>
        <h5>Rs. {price}</h5>
      </div>
      <div className={`${styles.itemOptions} flex-row`}>
        <button className="button-3" onClick={decreaseQuantity}>
          -
        </button>
        {quantity}
        <button className="button-3" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default React.memo(Item);
