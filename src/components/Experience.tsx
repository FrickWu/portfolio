export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "PENN Entertainment",
            duration: "May - August 2025",
            team: "Team: CORE Payments",
            technologies: ["Elixir", "Phoenix", "JavaScript", "PostgreSQL", "API Development", "Datadog", "Kubernetes", "Docker"],
            type: "past"
        },
        {
            title: "Software Engineer Intern",
            company: "theScore",
            duration: "Jan - April 2025",
            team: "Team: PAM Payments",
            technologies: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "API Development", "Datadog", "Kubernetes", "Docker"],
            type: "past"
        },
        {
            title: "Software Test Engineer Intern",
            company: "theScore",
            duration: "Jan - April 2025",
            team: "Team: PAM",
            technologies: ["Elixir", "Datadog", "Kubernetes", "Bugsnag", "Charles Proxy", "Git"],
            type: "past"
        },
        {
            title: "Software Engineer Intern",
            company: "MPBSD",
            duration: "May - August 2023",
            team: "Team: Customer Experience Platform",
            technologies: ["Java", "Spring", "Oracle SQL", "Azure", "CI/CD"],
            type: "past"
        }
    ];

    const getTypeStyles = (type: string) => {
        switch (type) {
            case 'upcoming':
                return {
                    badge: 'bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800/70 dark:to-slate-700/70 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600',
                    container: 'border-slate-300/50 dark:border-slate-600/50',
                    accent: 'from-slate-400 to-slate-500'
                };
            case 'current':
                return {
                    badge: 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-200 border border-blue-300 dark:border-blue-700',
                    container: 'border-blue-300/50 dark:border-blue-700/50',
                    accent: 'from-blue-400 to-blue-500'
                };
            default:
                return {
                    badge: 'bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700/50 dark:to-slate-600/50 text-slate-600 dark:text-slate-300 border border-slate-400 dark:border-slate-600',
                    container: 'border-slate-400/30 dark:border-slate-600/50',
                    accent: 'from-slate-500 to-slate-600'
                };
        }
    };

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-16">
                <div className="text-center mb-16">
                    <div className="backdrop-blur-sm bg-white/90 dark:bg-black/70 rounded-2xl p-8 shadow-xl border border-white/30 dark:border-blue-900/30 inline-block">
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent mb-4">
                            Experience
                        </h2>
                        <p className="text-slate-500 dark:text-slate-300 text-lg">
                            My professional journey in software engineering
                        </p>
                        
                        <div className="mt-4 flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-slate-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-500 dark:bg-blue-300 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-slate-600 dark:bg-blue-200 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => {
                        const typeStyles = getTypeStyles(exp.type);
                        return (
                            <div 
                                key={index} 
                                className={`group backdrop-blur-sm bg-white/90 dark:bg-black/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border ${typeStyles.container} hover:scale-[1.02] relative overflow-hidden`}
                            >

                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${typeStyles.accent}`}></div>
                                
                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                        <div className="mb-4 lg:mb-0">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-blue-200 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-xl font-semibold bg-gradient-to-r from-slate-600 to-slate-700 dark:from-blue-300 dark:to-blue-200 bg-clip-text text-transparent">
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <span className={`text-sm font-medium px-4 py-2 rounded-full ${typeStyles.badge} whitespace-nowrap`}>
                                            {exp.duration}
                                        </span>
                                    </div>
                                    
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                                        {exp.team}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-3">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:from-slate-300 hover:to-slate-400 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 hover:text-slate-800 dark:hover:text-blue-200 hover:border-slate-400 dark:hover:border-blue-600 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${typeStyles.accent}`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}