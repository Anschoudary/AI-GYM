import React, { useState } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
// --- CHANGE 1: Import NavLink ---
import { NavLink, Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from './context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Gyms', path: '/gyms' },
        { name: 'AI Tools', path: '/aitools' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    // --- CHANGE 2: Define the style logic in a function for reusability ---
    const getNavLinkClass = ({ isActive }) => {
        return `transition duration-300 font-medium ${
            isActive ? 'text-[#dc2626]' : 'text-[#a3a3a3] hover:text-[#dc2626]'
        }`;
    };

    return (
        <nav className="bg-[#121212] shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo (can remain a Link) */}
                    <Link to="/" className="text-2xl font-bold text-[#dc2626] uppercase tracking-wider">
                        AI<span className="text-[#f5f5f5]">Gym</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            // --- CHANGE 3: Use NavLink and the new class function ---
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={getNavLinkClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="text-[#a3a3a3] hover:text-[#dc2626] transition duration-300 font-medium flex items-center">
                                    <FiUser className="mr-1" /> {user?.username}
                                </Link>
                                <button onClick={handleLogout} className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-[#a3a3a3] hover:text-[#dc2626] transition duration-300 font-medium">
                                    Login
                                </Link>
                                <Link to="/signup" className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {isAuthenticated && (
                            <Link to="/dashboard" className="text-[#f5f5f5] mr-4">
                                <FiUser size={24} />
                            </Link>
                        )}
                        <button onClick={toggleMenu} className="text-[#f5f5f5] focus:outline-none">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#121212]">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                             // --- CHANGE 4: Apply the same logic to the mobile menu ---
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={getNavLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        {isAuthenticated ? (
                            <>
                                {/* ... auth links for mobile ... */}
                            </>
                        ) : (
                            <>
                                {/* ... non-auth links for mobile ... */}
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;