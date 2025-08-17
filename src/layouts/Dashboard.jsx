import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/Header";
import './Dashboard.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <main className="main-content">
                <Suspense fallback={<div className="loading-container">Carregando...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}

export default DashboardLayout;
