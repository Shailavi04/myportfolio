import React from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        link: 'https://myportfolio.com',
    },
    {
        title: 'E-commerce App',
        description: 'An e-commerce platform with user authentication and payment integration.',
        link: 'https://ecommerceapp.com',
    },
    {
        title: 'Blog Platform',
        description: 'A blogging platform where users can create, edit, and share posts.',
        link: 'https://blogplatform.com',
    },
];

const Projects: React.FC = () => {
    return (
        <section className="projects">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card border p-4 rounded shadow hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 inline-block"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;