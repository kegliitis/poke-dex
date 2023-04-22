import React from 'react';
import Main from './components/Main';
import { Link, Outlet } from "react-router-dom"
import './styles/style.css';



export default function App(){
    return (
        <>
        <Main/>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        < Outlet/>
        
        </>
    );
}
