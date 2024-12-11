import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import OffcanvasDashboard from "../components/OffcanvasDashboard";

function DashboardAdminUniv() {
    return (
        <>
            <OffcanvasDashboard/>
            <ToastContainer />
        </>
    );
}

export default DashboardAdminUniv;
