import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../src/redux/slices/appSlice'
import productReducer from '../src/redux/slices/productSlice'

export const store = configureStore({
 reducer: {
    app: appReducer,
    product: productReducer
 },
})