import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Provider store={store}>
      <Navbar />
      <Categories />
      <Component {...pageProps} />
    </Provider>
  </div>;
}
