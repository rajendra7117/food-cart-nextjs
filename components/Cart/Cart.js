import React from "react";
import styles from "../../styles/Cart.module.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import PaymentSection from "./PaymentSection";
import Modal from "../UI/Modal";
import OrderConfirmation from "./OrderConfirmation";
import Empty from "../shared/Empty";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = useSelector((state) => state.cart.totalPrice);

  const visible = useSelector((state) => state.modal.visible);

  console.log(visible);
  return (
    <>
      {visible === true ? (
        <Modal>{<OrderConfirmation />}</Modal>
      ) : (
        <>
          {" "}
          {cartItems.length > 0 ? (
            <div className={`${styles.cart} boxshadow-2`}>
              <h1>cart</h1>
              <div className={styles.items}>
                {cartItems.map((item) => (
                  <CartItems
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
              {cartItems.length > 0 && <PaymentSection total={total} />}
            </div>
          ) : (
            <Empty text="Your cart is empty" linkText="Go to Menu" url="/menu" />
          )}
        </>
      )}
    </>
  );
};

export default Cart;
