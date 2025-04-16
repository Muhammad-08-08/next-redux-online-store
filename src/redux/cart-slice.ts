import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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

            const count = 1

            const bormi = state.items.find(find_product => find_product.product_id === payload.id)

            if (bormi) {
                state.items.map((item) => {
                    if (item.product_id === payload.id) {
                        return item.qty++
                    }
                    return item
                })
                toast.success(`yana bitta qo'shildi`)
            } else {
                state.items.unshift({
                    product_id: payload.id,
                    product: payload,
                    qty: count,
                    total_price: payload.price
                })
                toast.success("savatchaga q'shildi")
            }
        },
        deletedCart: (state, { payload }) => {
            state.items = state.items.filter(item => item.product.id !== payload)
            toast.success("product o'chirildi")
        },
        increment: (state, { payload }) => {
            state.items = state.items.map(item => {
                return item.product_id === payload.product_id ? { ...item, qty: item.qty + 1, total_price: item.total_price + payload.total_price } : item
            })
        },
        decrement: (state, { payload }) => {
            state.items = state.items.map(item => {
                return item.product_id === payload.product_id ? { ...item, qty: item.qty - 1, totat_price: item.total_price + payload.total_price } : item
            })
        },
    }
})

export const { addToCart, deletedCart, increment, decrement } = cartSlice.actions
