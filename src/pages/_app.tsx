import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Categories />
        <Component {...pageProps} />
        <Footer />
        <Toaster />
      </Provider>
    </div>
  );
}
