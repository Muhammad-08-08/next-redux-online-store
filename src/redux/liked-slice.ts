import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export type likedSliceType = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}[];

const isLike: likedSliceType = [
    {
        id: 1,
        name: "test 1",
        imageUrl: "https://tinypng.com/static/images/boat.png",
        price: 20,
    },
];

export const likedSlice = createSlice({
    name: "like",
    initialState: isLike,
    reducers: {
        isLiked: (state, { payload }) => {
            const isLike = state.find(item => item.id === payload.id);
            if (isLike) {
                toast.success("Yoqtirishlardan olib tashlandi")
                return state.filter(item => item.id !== payload.id);
            } else {
                state.push(payload);
                toast.success("Yoqtirildi")
            }
        },
    },
});

export const { isLiked } = likedSlice.actions;
export default likedSlice.reducer;
