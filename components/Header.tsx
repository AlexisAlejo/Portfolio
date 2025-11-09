"use client";
import React, { useEffect, useState } from 'react';

const nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [active, setActive] = useState<string>('home');

    useEffect(() => {
        const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
        if (!sections.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    function handleClick(e: React.MouseEvent, id: string) {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // fallback: navigate to root with hash
            window.location.href = `/#${id}`;
        }
    }

    return (
        <header className="backdrop-blur-sm bg-white/80 border-b sticky top-0 z-40">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">A</div>
                    <span className="font-semibold text-lg">My Portfolio</span>
                </a>

                <nav aria-label="Main navigation">
                    <ul className="flex gap-6 text-sm text-gray-700">
                        {nav.map((n) => (
                            <li key={n.id}>
                                <a
                                    href={`/#${n.id}`}
                                    onClick={(e) => handleClick(e, n.id)}
                                    className={`nav-link ${active === n.id ? 'active' : ''} hover:text-indigo-600 transition-colors duration-200`}
                                >
                                    {n.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;