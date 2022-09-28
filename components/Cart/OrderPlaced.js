import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceActions } from "../../store/ModalSlice";
import { ordersSliceActions } from "../../store/ordersSlice";
import { cartSliceActions } from "../../store/CartSlice";
import { useRouter } from "next/router";
const OrderPlaced = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const addOrder = () => {
   
    dispatch(ordersSliceActions.addAnOrder(cartItems));
    dispatch(cartSliceActions.clearCart())
    dispatch(modalSliceActions.hideModal())
    router.push('/menu')
  };
  return (
    <div className="flex-col">
      <h3>Order Placed</h3>
      <button className="button-2" onClick={addOrder}>
        continue for more food
      </button>
    </div>
  );
};

export default OrderPlaced;
