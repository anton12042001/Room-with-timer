import React from 'react'
import cl from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import {store} from "./reduxToolkit";
import {Provider, } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={cl.appWrapper}>
                    <div className={cl.appPage}>
                        <AppRouter/>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
