import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            product_id: 1,
            product: {
                id: 1,
                name: "test 1",
                imageUrl: "https://tinypng.com/static/images/boat.png",
                price: 20
            },
            qty: 1,
            total_price: 20
        },
        {
            product_id: 2,
            product: {
                id: 2,
                name: "test 2",
                imageUrl: "https://tinypng.com/static/images/boat.png",
                price: 20
            },
            qty: 2,
            total_price: 40
        }
    ]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.items.unshift({
                product_id: payload.id,
                product: payload,
                qty: 1,
                total_price: payload.price
            })
        }
    }
})

export const { addToCart } = cartSlice.actions
