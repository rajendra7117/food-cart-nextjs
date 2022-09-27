import React from "react";
import styles from "../../styles/Cart.module.css";
import { BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../store/ModalSlice";
import { cartSliceActions } from "../../store/CartSlice";
const PaymentSection = ({ total }) => {

  const dispatch = useDispatch()
  return (
    <div className={styles.paymentSection}>
      <div className={`${styles.subSection} flex-col`}>
        <div className="flex-row">
          <h4>Total</h4>
          <span className="flex-row">
            <BiRupee />
            {total}
          </span>
        </div>
        <div className={`${styles.paymentButtons} flex-row`}>
            <button className="button-1" onClick={() => dispatch(modalSliceActions.showModal())}>place order</button>
            <button className="button-1" onClick={() => dispatch(cartSliceActions.clearCart())}>clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
