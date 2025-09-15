export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-16">
                <div className="text-center mb-16 mx-4">
                    <div className="backdrop-blur-sm bg-white/90 dark:bg-black/70 rounded-2xl p-12 shadow-xl border border-white/30 dark:border-blue-900/30">
                        <a 
                            href="https://lol.fandom.com/wiki/Daesper" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block group relative z-30 cursor-pointer"
                        >
                            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent p-4 mb-8 group-hover:from-slate-600 group-hover:to-blue-800 dark:group-hover:from-blue-200 dark:group-hover:to-white transition-all duration-300 cursor-pointer">
                                Hello, I am Frick Wu
                            </h1>
                        </a>
                        
                        <div className="space-y-6">
                            <p className="text-xl text-slate-600 dark:text-slate-200 max-w-4xl mx-auto leading-relaxed font-medium">
                                I am a <span className="text-slate-700 dark:text-blue-300 font-semibold">retired competitor</span> turned 
                                <span className="text-slate-700 dark:text-blue-300 font-semibold"> Computer Science student at TMU</span> with experience as a 
                                <span className="text-slate-700 dark:text-blue-300 font-semibold"> Software Engineer</span> at theScore and MPBSD.
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                I am passionate about building innovative solutions and currently seeking a 
                                <span className="text-slate-600 dark:text-blue-300 font-semibold"> new grad 2026 SWE role</span>. 
                                I enjoy developing applications, exploring new technologies, and melting my brain.
                            </p>
                        </div>

                        <div className="mt-8 flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-slate-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-500 dark:bg-blue-300 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-slate-600 dark:bg-blue-200 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};