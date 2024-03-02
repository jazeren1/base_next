import React, { ReactNode, useState } from 'react';
import NavItem from './NavItem'; // Update the import path if necessary
import { FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
    children: ReactNode; // Define children as ReactNode type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-100">
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-white font-bold text-lg">Next.js App</a>
                    <div className="md:hidden">
                        {isOpen ? (
                            <FaTimes onClick={() => setIsOpen(false)} className="text-white text-2xl" />
                        ) : (
                            <FaBars onClick={() => setIsOpen(true)} className="text-white text-2xl" />
                        )}
                    </div>
                    <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:space-x-8 md:items-center`}>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                        <NavItem href="/services">Services</NavItem>
                        <NavItem href="/account">Account</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul>
                </div>
            </nav>
            <div className="container mx-auto mt-8">
                {children}
            </div>
        </div>
    );
};

export default Layout;
