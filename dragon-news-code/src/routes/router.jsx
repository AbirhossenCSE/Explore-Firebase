import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home Layout</h1>
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: 'auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default router;