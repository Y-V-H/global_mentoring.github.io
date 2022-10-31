import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './toolkit-store/index';

import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    BrowserRouter
} from "react-router-dom";


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)