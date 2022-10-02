import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products:[],
    quantity:0,
    total:0 

}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products?.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct:(state)=>{
           return initialState

        }
    },
});



export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;