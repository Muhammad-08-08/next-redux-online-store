import Api from "@/API/Api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthSliceType = {
    user: string | null;
    accessToken: string;
};

const initialState: AuthSliceType = {
    user: null,
    accessToken: ""
};

if (typeof window !== "undefined") {
    const ls_string = localStorage.getItem("yangi_login");
    const ls = ls_string ? JSON.parse(ls_string) : null;

    if (ls?.accessToken) {
        Api.defaults.headers.Authorization = `Bearer ${ls.accessToken}`;
        initialState.user = ls.user || null;
        initialState.accessToken = ls.accessToken || "";
    }
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<AuthSliceType>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;

            if (typeof window !== "undefined") {
                localStorage.setItem("yangi_login", JSON.stringify(action.payload));
                Api.defaults.headers.Authorization = `Bearer ${action.payload.accessToken}`;
            }
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = "";

            if (typeof window !== "undefined") {
                localStorage.removeItem("yangi_login");
                delete Api.defaults.headers.Authorization;
            }
        }
    }
});

export const { setAuth, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
