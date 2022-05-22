import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Info } from "../pages/Info";
import { AddEdit } from "../pages/AddEdit";
import { ToastContainer } from "react-toastify";

export const MainRoutes = (): JSX.Element => (
    <BrowserRouter>
        <ToastContainer />
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddEdit />} />
                <Route path="/edit/:id" element={<AddEdit />} />
                <Route path="/info/:id" element={<Info />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


