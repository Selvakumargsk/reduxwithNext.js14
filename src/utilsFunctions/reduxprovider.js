'use client';
import { Provider } from "react-redux";
import { store } from "@/redux/store/configureStore";

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}