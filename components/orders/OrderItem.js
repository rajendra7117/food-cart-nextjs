import React from "react";
import Image from "next/image";
import styles from '../../styles/Orders.module.css'
const OrderItem = ({ title, id, img, price, quantity }) => {
  return (
    <div className={`${styles.orderItem} flex-row boxshadow-1`}>
      <Image src={img} alt="cart-item" width={150} height={150} style={{borderRadius: "0.2rem"}} />
      <h3>{title}</h3>
      <h3>Rs.{price}</h3>
      <h3>quantity: {quantity}</h3>
    </div>
  );
};

export default OrderItem;
