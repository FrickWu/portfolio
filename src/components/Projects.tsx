export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A portfolio website to showcase my work and experience",
            technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
            githubUrl: "https://github.com/FrickWu/portfolio"
        },
        {
            title: "The Reserve",
            description: "Online banking application made in a group for a course",
            technologies: ["Javascript", "MongoDB", "Express", "React", "Node"],
            githubUrl: "https://github.com/FrickWu/CPS406-project"
        },
        {
            title: "Projects",
            description: "Find more projects in my GitHub Repository!",
            technologies: ["Python", "TypeScript", "JavaScript", "Java", "Elixir"],
            githubUrl: "https://github.com/FrickWu"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex space-x-4">
                                    <a 
                                        href={project.githubUrl} 
                                        className="text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}