"use client";

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'sonner';

const ReduxStoreProvider = ({children}: {children: ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster position="top-center" swipeDirections={["top"]} duration={3000} />
        </Provider>
    );
};

export default ReduxStoreProvider;