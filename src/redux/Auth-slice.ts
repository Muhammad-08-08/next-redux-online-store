import Api from "@/API/Api";
import { createSlice } from "@reduxjs/toolkit";

export type AuthSliceType = {
    user: string | null
    accessToken: string
}

const ls_string = localStorage.getItem("yangi_login");
const ls = ls_string ? JSON.parse(ls_string) : undefined;

if (ls?.accessToken) {
    Api.defaults.headers.Authorization = `Bearer ${ls.accessToken}`;
}


const AuthSliceLogin: AuthSliceType = {
    user: ls.user || null,
    accessToken: ls.accessToken || ""
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState: AuthSliceLogin,
    reducers: {}
})

export const { } = AuthSlice.actions