import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importação correta
import DashboardLayout from "../layouts/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;
