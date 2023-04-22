import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import { RouterProvider, createHashRouter } from "react-router-dom"


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
