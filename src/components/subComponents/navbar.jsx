import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.style.css';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbar">
                <div className="navlogo">
                    <p className="text">
                        Quizzer'a
                    </p>
                </div>
                <div className="menulist">
                    <a href='/'>Home</a>
                    <a href='#about'>About Us</a>
                    <Link to='/quiz'>Test Quiz</Link>
                    <a href='#contactus'>Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;