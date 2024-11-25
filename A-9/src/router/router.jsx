import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Career from '../pages/Career';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Details from '../pages/Details';
import Profile from '../components/Profile';
import PrivateRoute from './PrivateRoute';
import ContactUs from '../components/ContactUs';
import UpdateProfile from '../components/UpdateProfile';




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to={'/career'}></Navigate>
            },
            {
                path: '/career',
                element: <Career></Career>,
                loader: () => fetch('career.json')
            },
        ]
       
    },
    {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: async ({ params }) => {
            const response = await fetch('/career.json'); // Fetch all data
            const services = await response.json();
            return services.find((service) => service.id === parseInt(params.id)); // Find the service by ID
        },
    },

    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
    },
    {
        path: '/contact',
        element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
    },
    {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
    },
    {
        path: '*',
        element: <h1>Error</h1>
    },
    

])


export default router;

