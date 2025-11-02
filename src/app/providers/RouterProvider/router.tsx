import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {MainPage} from "@/pages/MainPage";

export const RouterProvider = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} />
    </BrowserRouter>
);