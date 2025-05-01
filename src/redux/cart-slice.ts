import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: [],
};

type CartItem = {
  product_id: number;
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
  qty: number;
  total_price: number;
};

type CartType = {
  items: CartItem[];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState as CartType,
  reducers: {
    addToCart: (state, { payload }) => {
      const count = 1;

      const bormi = state.items.find(
        (find_product) => find_product.product_id === payload.id
      );

      if (bormi) {
        state.items.map((item) => {
          if (item.product_id === payload.id) {
            return item.qty++;
          }
          return item;
        });
        toast.success(`yana bitta qo'shildi`);
      } else {
        state.items.unshift({
          product_id: payload.id,
          product: payload,
          qty: count,
          total_price: payload.price,
        });
        toast.success("savatchaga q'shildi");
      }
    },
    deletedCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.product.id !== payload);
      toast.success("product o'chirildi");
    },
    increment: (state, { payload }) => {
      state.items = state.items.map((item) => {
        return item.product_id === payload.product_id
          ? {
              ...item,
              qty: item.qty + 1,
              total_price: item.total_price + payload.total_price,
            }
          : item;
      });
    },
    decrement: (state, { payload }) => {
      state.items = state.items.map((item) => {
        return item.product_id === payload.product_id
          ? {
              ...item,
              qty: item.qty - 1,
              totat_price: item.total_price + payload.total_price,
            }
          : item;
      });
    },
  },
});

export const { addToCart, deletedCart, increment, decrement } =
  cartSlice.actions;
