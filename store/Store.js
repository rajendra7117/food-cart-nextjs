import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import modalSlice from "./ModalSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        modal: modalSlice.reducer
    }
})

export default store;