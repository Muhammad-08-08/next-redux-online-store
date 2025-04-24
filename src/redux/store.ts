import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { likedSlice } from "./liked-slice";
import { AuthSlice } from "./Auth-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        isLiked: likedSlice.reducer,
        login: AuthSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch