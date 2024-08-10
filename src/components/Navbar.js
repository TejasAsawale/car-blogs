import React from "react";
import { Link } from "react-router-dom";
import '../components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
                <Link to="/">Home</Link>
                <Link to="/features">Features </Link>
                <Link to="/Pricing">Pricing</Link>
        </nav>
    );
};

export default Navbar;
