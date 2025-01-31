import React form 'react';
import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="nav-logo">
                    <UserRound size={24} />
                    <span>Edel HealthCare</span>
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/appointments">   Book Appointment</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;