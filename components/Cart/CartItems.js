import React from "react";
import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import { BiRupee } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/CartSlice";

const CartItems = ({ title, id, img, quantity, price }) => {
  const dispatch = useDispatch();

  const inCreaseQuantity = () => {
    dispatch(
      cartSliceActions.addToCart({ id, title, img, quantity: 1, price })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSliceActions.removeFromCart({ id, title, img, quantity: 1, price })
    );
  };
  return (
    <div className={styles.cartItem}>
   
      <div className="flex-row">
        {/* <img src={img} alt="cart-item" /> */}
        <Image src={img} alt="cart-item" width={200} height={200} />
        <div className={`${styles.cartContainer} flex-col`}>
          <h3>{title}</h3>
          <span className="flex-row">
            <BiRupee  fontSize={16} />
            {price}
          </span>
          <span className="flex-row">
            
            <ImCross fontSize={10} /> {quantity}
          </span>
        </div>
        <div className={`${styles.cartButtons} flex-row`}>
          <button className="button-2" onClick={decreaseQuantity}>
            -
          </button>
          <button className="button-2" onClick={inCreaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItems);
