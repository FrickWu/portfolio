export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer Co-op",
            company: "PENN Entertainment",
            duration: "May - August 2025",
            team: "Team: CORE Payments",
            technologies: ["Elixir", "Phoenix", "JavaScript", "PostgreSQL", "API Development", "Datadog", "Kubernetes", "Docker"]
        },
        {
            title: "Software Engineer Co-op",
            company: "theScore",
            duration: "Jan - April 2025",
            team: "Team: PAM Payments",
            technologies: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "API Development", "Datadog", "Kubernetes", "Docker"]
        },
        {
            title: "Quality Assurance Analyst Co-op",
            company: "theScore",
            duration: "Jan - April 2025",
            team: "Team: PAM",
            technologies: ["Elixir", "Datadog", "Kubernetes", "Bugsnag", "Charles Proxy", "Git"]
        },
        {
            title: "Software Engineer Co-op",
            company: "MPBSD",
            duration: "May - August 2023",
            team: "Team: Customer Experience Platform",
            technologies: ["Java", "Spring", "Oracle SQL", "Azure", "CI/CD"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                    <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                                </div>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {exp.duration}
                                </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">{exp.team}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}