import React from 'react';
import { Link } from 'react-router-dom';
import './mobile.css';

const MobileNav: React.FC = () => {
    return (
        <nav className="mobile-nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/storage">Storage</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNav;