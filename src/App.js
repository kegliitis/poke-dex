import React from 'react';
import Main from './components/Main';
import About from './components/About';
import { Link, Route, Routes } from "react-router-dom"
import './styles/style.css';



export default function App(){
    return (
        <>
        <header>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Poke-Dex</Link>
                    <div className="navbar-links">
                        <Link to="/" className="navbar-link">Home</Link>
                        <Link to="/about" className="navbar-link">About</Link>
                    </div>
                </div>
            </nav>
        </header>
        
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </>
    );
}
