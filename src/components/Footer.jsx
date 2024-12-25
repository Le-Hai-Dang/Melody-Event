import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Melody</h3>
                    <p>Melody is a leading event management company specializing in music events. We bring the best musical experiences to life with our expert team and state-of-the-art technology.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: danghaile2003@hmail.com</p>
                    <p>Phone: +84 793776157</p>
                    <p>Address: 123 Distric 1, Ho Chi Minh City, Viet Nam</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Melody Events. Devolop by Le Hai Dang
            </div>
        </footer>
    );
};

export default Footer;