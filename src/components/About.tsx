export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-6x1 mx-auto px-16">
                <div className="text-center mb-16 mx-4">
                    <a 
                        href="https://lol.fandom.com/wiki/Daesper" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 p-8 mb-6 hover:text-blue-600 transition-colors cursor-pointer">
                            Hello, I'm Frick Wu
                        </h1>
                    </a>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        I'm a retired competitor turned Computer Science student at TMU with experience as a Software Engineer at theScore and MPBSD. 
                        I'm passionate about building innovative solutions and currently seeking a new grad 2026 SWE role. 
                        I enjoy developing applications, exploring new technologies, and melting my brain.
                    </p>
                </div>
            </div>
        </section>
    );
};