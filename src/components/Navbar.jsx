
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";

// const NavItem = ({ to, children, onClick }) => (
//     // <Link
//     //     to={to}
//     //     onClick={onClick}
//     //     className="hover:text-yellow-500 transition-colors duration-300 font-medium"
//     // >
//     //     {children}
//     // </Link>

//     <NavLink
//         to={to}
//         onClick={onClick}
//         // 2. Use a function in className to check if active
//         className={({ isActive }) =>
//             `transition-colors duration-300 font-medium uppercase tracking-wider text-sm ${isActive
//                 ? "text-yellow-500 font-bold" // Style when ON the page
//                 : "text-white hover:text-yellow-500" // Style when NOT on the page
//             }`
//         }
//     >
//         {children}
//     </NavLink>

// );

const NavItem = ({ to, children, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `relative pb-1 transition-colors duration-300 font-medium uppercase tracking-wider text-sm ${isActive ? "text-yellow-500" : "text-white hover:text-yellow-500"
            }`
        }
    >
        {({ isActive }) => (
            <>
                {children}
                {/* The Premium Underline */}
                {isActive && (
                    <motion.div
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-yellow-500 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </>
        )}
    </NavLink>
);




export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-600/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-widest">
                    {/* <span className="text-yellow-500">SEP</span>CONCEPT */}
                    <span>{/* YOUR BRANDING LOGO */}
                        <img
                            src="/src/assets/SEP REBRAND Logo and name white.png"
                            alt="SEP CONCEPT - Secure Elegant Production"
                            className="w-full max-w-[100px] h-auto"
                        /></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/services">Services</NavItem>
                    <NavItem to="/portfolio">Portfolio</NavItem>
                    <NavItem to="/contact">Contact</NavItem>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <div className="md:hidden bg-black border-t border-yellow-600/20 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
                    <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
                    <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
                    <NavItem to="/services" onClick={() => setOpen(false)}>Services</NavItem>
                    <NavItem to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavItem>
                    <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>
                </div>
            )}
        </header>
    );
}

function NavbarPrevious() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-yellow-600/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-widest">
                    <span className="text-yellow-500">SEP</span>CONCEPT
                </Link>

                <nav className="hidden md:flex gap-8 text-sm">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/services">Services</NavItem>
                    <NavItem to="/portfolio">Portfolio</NavItem>
                    {/* <NavItem to="/process">Process</NavItem> */}
                    <NavItem to="/contact">Contact</NavItem>
                </nav>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black border-t border-yellow-600/20 px-6 pb-6 flex flex-col gap-4">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/services">Services</NavItem>
                    <NavItem to="/portfolio">Portfolio</NavItem>
                    {/* <NavItem to="/process">Process</NavItem> */}
                    <NavItem to="/contact">Contact</NavItem>
                </div>
            )}
        </header>
    );
}
