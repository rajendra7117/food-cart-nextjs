import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import modalSlice from "./ModalSlice";
import ordersSlice from "./ordersSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        modal: modalSlice.reducer,
        orders: ordersSlice.reducer
    }
})

export default store;