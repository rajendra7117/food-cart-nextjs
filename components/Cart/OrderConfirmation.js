import React from "react";
import styles from '../../styles/Cart.module.css'
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../store/ModalSlice";
import { cartSliceActions } from "../../store/CartSlice";
const OrderConfirmation = () => {

    const dispatch = useDispatch()

    const placeOrder = () => {
        dispatch(modalSliceActions.hideModal())
        dispatch(cartSliceActions.clearCart())
    }
  return (
    <div className={styles.order}>
      <h4>Please confirm your order</h4>
      <div className="flex-row">
        <button className="button-2" onClick={placeOrder}>Confirm</button>
        <button className="button-2" onClick={(() => dispatch(modalSliceActions.hideModal()))}>Cancel</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
