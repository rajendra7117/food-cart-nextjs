import React, { useState } from "react";
import styles from "../../styles/Cart.module.css";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../store/ModalSlice";
import { cartSliceActions } from "../../store/CartSlice";
import OrderPlaced from "./OrderPlaced";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className={`${styles.order} flex-col`}>
      {!orderPlaced ? (
        <>
          <h4>Please confirm your order</h4>
          <div className="flex-row">
            <button className="button-2" onClick={placeOrder}>
              Confirm
            </button>
            <button
              className="button-2"
              onClick={() => dispatch(modalSliceActions.hideModal())}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <OrderPlaced />
      )}
    </div>
  );
};

export default OrderConfirmation;
