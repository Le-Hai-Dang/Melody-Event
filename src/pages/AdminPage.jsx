import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import Auth from '../components/Auth';

const AdminPage = () => {
    const isAuthenticated = Auth.isAuthenticated(); // Assuming Auth has a method to check authentication

    if (!isAuthenticated) {
        return <div>You do not have permission to access this page.</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <AdminDashboard />
        </div>
    );
};

export default AdminPage;