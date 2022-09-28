import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: "orders",
    initialState: {orders: []},
    reducers:{
        addAnOrder(state, action){
            state.orders.push(action.payload)
        }
    }
})

export const ordersSliceActions = ordersSlice.actions

export default ordersSlice;