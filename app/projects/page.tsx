import React from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { projects as sampleProjects } from '../../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold">My Projects</h1>
        <p className="mt-2 text-gray-600">Selected projects demonstrating frontend and full-stack work.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;