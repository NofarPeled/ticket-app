import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className = "header-section">
            <Link to = "/">
                <i className="fas fa-check-double"></i>
                <h1 className = "header-title">Tickets</h1>
            </Link>
        </section>
    )
}

export default Header;