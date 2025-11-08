import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="backdrop-blur-sm bg-white/80 border-b sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">A</div>
                    <span className="font-semibold text-lg">My Portfolio</span>
                </a>

                <nav aria-label="Main navigation">
                    <ul className="flex gap-6 text-sm text-gray-700">
                        <li>
                            <a href="/" className="hover:text-indigo-600 transition-colors duration-200">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-indigo-600 transition-colors duration-200">About</a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-indigo-600 transition-colors duration-200">Projects</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-indigo-600 transition-colors duration-200">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;