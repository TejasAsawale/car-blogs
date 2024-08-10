import React from 'react';
import '../pages/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
            <h4>About Us</h4>
            <p>
                We are a company dedicated to providing the best service and quality
                products to our customers.
            </p>
            </div>
            <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Features">Features</a></li>
                <li><a href="/Pricing">Pricing</a></li>
            </ul>
            </div>
            <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: careza@Company.com</p>
            <p>Phone: +91 8459928313</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Careza. All rights reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
