import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineNewspaper } from "react-icons/hi";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                    <HiOutlineNewspaper size={32} className="text-indigo-600" />
                    <p className="text-xl tracking-wide">Sanchar</p>
                </div>

                {/* Navigation */}
                <nav className="flex gap-6 text-sm md:text-base font-medium">
                    <NavLink
                        to="/"
                        className="text-gray-600 hover:text-indigo-600 transition"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/discover"
                        className="text-gray-600 hover:text-indigo-600 transition"
                    >
                        Discover
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="text-gray-600 hover:text-indigo-600 transition"
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="text-gray-600 hover:text-indigo-600 transition"
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;