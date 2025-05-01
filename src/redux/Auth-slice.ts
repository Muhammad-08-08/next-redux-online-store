import Api from "@/API/Api";
import { createSlice } from "@reduxjs/toolkit";

export type AuthSliceType = {
  user: {
    id: number;
    name: string;
  } | null;
  accessToken: string;
};

function serverSidewindow() {
  return typeof window === "undefined";
}

const serverLocaleStorage = serverSidewindow()
  ? undefined
  : localStorage.getItem("yangi_login");
const initialState: AuthSliceType = serverLocaleStorage
  ? JSON.parse(serverLocaleStorage)
  : {};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = "";

      if (typeof window !== "undefined") {
        localStorage.removeItem("yangi_login");
        delete Api.defaults.headers.Authorization;
      }
    },
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
