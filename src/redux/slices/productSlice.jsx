import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    selectedProduct: {},
    basket: [],


}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {


        setBasketData: (state, action) => {
            state.basket.push(action.payload);
        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload.id);
        },
    },

})

export const { setBasketData, removeFromBasket } = productSlice.actions

export default productSlice.reducer