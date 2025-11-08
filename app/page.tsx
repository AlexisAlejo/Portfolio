import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Hi, I'm Your Name.</h1>
        <p className="mt-4 text-lg text-gray-600">
          I build delightful and accessible web experiences with Next.js and TypeScript.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/projects" className="px-5 py-3 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700 transition">View Projects</a>
          <a href="/about" className="px-5 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition">About me</a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;