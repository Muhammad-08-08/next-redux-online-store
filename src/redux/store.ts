import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { likedSlice } from "./liked-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        isLiked: likedSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch