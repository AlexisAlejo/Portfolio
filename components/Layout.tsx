import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Layout wraps pages and provides consistent header/footer and page padding.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-12">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;