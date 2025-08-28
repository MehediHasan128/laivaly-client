"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

const ReduxStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Toaster
          position="top-center"
          swipeDirections={["top"]}
          duration={3000}
        />
      </PersistGate>
    </Provider>
  );
};

export default ReduxStoreProvider;
