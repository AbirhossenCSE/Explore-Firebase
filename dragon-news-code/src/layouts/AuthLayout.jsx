import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <h2>Authlayout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;