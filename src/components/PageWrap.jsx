
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Import the new Navbar

export default function PageWrap({ children }) {
    const { pathname } = useLocation();

    // This ensures the page always starts at the top when you navigate
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="w-full min-h-screen bg-black text-white selection:bg-yellow-500/30">
            <Navbar />
            {/* {children} */}
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}

function Footer() {
    return (
        <footer className="border-t border-yellow-600/20 py-10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SEPCONCEPT — Secure Elegant Production. All rights reserved.
        </footer>
    );
}

// function PageWrap({ children }) {
//   return (
//     <div className="bg-black text-white font-sans min-h-screen">
//       <Navbar />
//       <main className="pt-24">{children}</main>
//       <Footer />
//     </div>
//   );
// }
