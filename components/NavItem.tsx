import React from 'react';

interface NavItemProps {
    href: string;
    children?: React.ReactNode; // Define children as an optional React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
    return (
        <li>
            <a href={href} className="text-white hover:text-gray-200">{children}</a>
        </li>
    );
};

export default NavItem;
