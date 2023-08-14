import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Project from './pages/Project';
import ErrorPage from './pages/ErrorPage';
import Contact from './components/Contact/index.jsx';

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
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/project',
                element: <Project />,
            },
            {
                path: '/errorpage',
                element: <ErrorPage />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
