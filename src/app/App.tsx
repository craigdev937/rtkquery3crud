import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { MainRoutes } from "../routes/MainRoutes";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <MainRoutes />
            </Provider>
        </React.Fragment>
    );
};



