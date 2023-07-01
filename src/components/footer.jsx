import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './FooterLinks/footer.css'

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <Link to='/about' className="footer-link" >About Us</Link>
                <Link to='/contact' className="footer-link" >Contact Us</Link>
                <Link to='/shipping' className="footer-link" >Shipping Rates</Link>
                <Link to='/returns' className="footer-link" >Return Policy</Link>
            </div>
        </div>
    )
}

