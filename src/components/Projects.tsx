export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A modern, responsive portfolio website built with Next.js to showcase my work and professional experience.",
            technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
            githubUrl: "https://github.com/FrickWu/portfolio",
            type: "academic"
        },
        {
            title: "The Reserve",
            description: "Full-stack online banking application developed as a team project. Implements secure authentication, transaction management, and real-time balance updates.",
            technologies: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
            githubUrl: "https://github.com/FrickWu/CPS406-project",
            type: "academic"
        },
        {
            title: "More Projects",
            description: "Explore my diverse collection of projects including web applications, data analysis tools, and experimental software built with various technologies.",
            technologies: ["Python", "TypeScript", "JavaScript", "Java", "Elixir"],
            githubUrl: "https://github.com/FrickWu",
            type: "collection"
        }
    ];

    const getProjectStyles = (type: string) => {
        switch (type) {
            case 'featured':
                return {
                    container: 'border-blue-300/50 dark:border-blue-700/50 hover:border-blue-400 dark:hover:border-blue-600',
                    accent: 'from-blue-400 to-blue-500',
                    titleGradient: 'from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-200',
                    badge: 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-200 border border-blue-300 dark:border-blue-700'
                };
            case 'academic':
                return {
                    container: 'border-slate-300/50 dark:border-slate-600/50 hover:border-slate-400 dark:hover:border-slate-500',
                    accent: 'from-slate-400 to-slate-500',
                    titleGradient: 'from-slate-600 to-slate-700 dark:from-slate-300 dark:to-slate-200',
                    badge: 'bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700/50 dark:to-slate-600/50 text-slate-600 dark:text-slate-300 border border-slate-400 dark:border-slate-600'
                };
            default:
                return {
                    container: 'border-slate-400/50 dark:border-slate-500/50 hover:border-slate-500 dark:hover:border-slate-400',
                    accent: 'from-slate-500 to-slate-600',
                    titleGradient: 'from-slate-700 to-slate-800 dark:from-slate-200 dark:to-slate-100',
                    badge: 'bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600/50 dark:to-slate-500/50 text-slate-700 dark:text-slate-200 border border-slate-500 dark:border-slate-500'
                };
        }
    };

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-16">
                <div className="text-center mb-16">
                    <div className="backdrop-blur-sm bg-white/90 dark:bg-black/70 rounded-2xl p-8 shadow-xl border border-white/30 dark:border-blue-900/30 inline-block">
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-4">
                            Projects
                        </h2>
                        <p className="text-slate-500 dark:text-slate-300 text-lg">
                            A showcase of my development work and creative solutions
                        </p>
                        
                        <div className="mt-4 flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-slate-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-500 dark:bg-blue-300 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-slate-600 dark:bg-blue-200 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const projectStyles = getProjectStyles(project.type);
                        return (
                            <div 
                                key={index} 
                                className={`group backdrop-blur-sm bg-white/90 dark:bg-black/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border ${projectStyles.container} hover:scale-[1.02] relative`}
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${projectStyles.accent}`}></div>
                                
                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className={`text-xl font-bold bg-gradient-to-r ${projectStyles.titleGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 hover:from-slate-300 hover:to-slate-400 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 hover:text-slate-800 dark:hover:text-blue-200 hover:border-slate-400 dark:hover:border-blue-600 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex space-x-3 relative z-20">
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full text-center bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium hover:scale-105 relative z-30 cursor-pointer"
                                        >
                                            {project.type === 'collection' ? 'View All' : 'GitHub'}
                                        </a>
                                    </div>
                                </div>

                                <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10 pointer-events-none">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${projectStyles.accent}`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}