import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {MainPage} from "@/pages/MainPage";

// const basename = '/BaseApparelComingSoon';

export const RouterProvider = () => (
    <BrowserRouter basename={basename ?? '/'}>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} />
    </BrowserRouter>
);