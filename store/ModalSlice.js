import { createSlice } from "@reduxjs/toolkit";

const modalSlice  = createSlice({
    name: 'modal',
    initialState: {visible: false},
    reducers:{
        showModal(state){
            state.visible = true
        },
        hideModal(state){
            state.visible = false
        }
    }

})

export const modalSliceActions = modalSlice.actions

export default modalSlice;