import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { NavigationProvider } from "./context/navigation";
import { store } from "./store";
import { Provider } from "react-redux";

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App/>
        </NavigationProvider>
    </Provider>
);