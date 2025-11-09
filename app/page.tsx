import React from 'react';
import ScrollDown from '../components/ScrollDown';

const HomePage: React.FC = () => {
  return (
    <>
  {/* Hero - fills viewport so user can scroll to next section */}
  <section id="home" className="relative animated-bg hero-backdrop min-h-screen flex items-center justify-center">
        <div className="hero-overlay max-w-3xl mx-auto text-center px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Hi, I'm Your Name.</h1>
          <p className="mt-4 text-lg text-gray-700">
            I build delightful and accessible web experiences with Next.js and TypeScript.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="/projects" className="px-5 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 transition">View Projects</a>
            <a href="/about" className="px-5 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition">About me</a>
          </div>
        </div>

        <ScrollDown target="#about" />
      </section>
      {/* About section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-600 mb-6">A short about blurb. Replace this with your bio, skills, and background.</p>
      </section>

      {/* Projects section */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-600 mb-6">A few highlighted projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white shadow">Project A — short description.</div>
          <div className="p-6 rounded-lg bg-white shadow">Project B — short description.</div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">Let people reach out — add contact details or a form here.</p>
      </section>
    </>
  );
};

export default HomePage;