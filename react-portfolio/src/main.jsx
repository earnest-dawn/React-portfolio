import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
