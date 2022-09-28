import React from "react";
import styles from "../../styles/Orders.module.css"
import OrderItem from "./OrderItem";
const Order = ({ order }) => {
    console.log(order)
  return (
    <div className={`${styles.order} center flex-col`}>
      {order.map((item) => <OrderItem key={item.id} title={item.title} img={item.img} price={item.price} quantity={item.quantity}/>)}
    </div>
  );
};

export default Order;
