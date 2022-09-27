import React from "react";
import Link from "next/link";
import { BsCart, BsCartFill } from "react-icons/bs";
import styles from "../../styles/Header.module.css";
import { useSelector } from "react-redux";
const CartLink = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className={`${styles.cartButton}`}>
      <Link href="/cart">
        <a>
          {cartItems.length === 0 ? (
            <BsCart fontSize={23} />
          ) : (
            <BsCartFill fontSize={23} />
          )}
        </a>
      </Link>
    </div>
  );
};

export default CartLink;
