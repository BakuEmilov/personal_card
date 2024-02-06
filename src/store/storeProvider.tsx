"use client";
import { AppStore, setupStore } from "@/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const store = setupStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  storeRef.current = store;

  return <Provider store={store}>{children}</Provider>;
}
