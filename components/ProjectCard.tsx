import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tech = [] }) => {
    return (
        <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border">
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>

                {tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {tech.map((t) => (
                            <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                        ))}
                    </div>
                )}

                <div className="mt-4">
                    <a
                        href={link}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                        rel="noopener noreferrer"
                    >
                        View Project
                        <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;