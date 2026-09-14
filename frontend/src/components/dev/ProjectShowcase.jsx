
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function ProjectCard({ projects }) {
    const [selectedProject, setSelectedProject] = useState(0)
    const containerRef = useRef(null);
    const itemHeight = 96;

    function handleScroll() {
        const container = containerRef.current;
        if (!container) return;
        const index = Math.round(container.scrollTop / itemHeight);
        setSelectedProject(index);
    }

    function scrollToProject(i) {
        containerRef.current?.scrollTo({
            top: i * itemHeight,
            behavior: "smooth"
        })
    }

    const project = projects[selectedProject];

    return (
        <section className="projectSection flex flex-wrap justify-center gap-10 rounded-2xl p-5 min-w-screen">
            <div className="screen flex-1 min-w-[380px] max-w-[800px] flex flex-col justify-center">
                <div className="relative bg-black rounded-md overflow-hidden aspect-video mb-5">
                    <video
                        key={project.key}
                        src={project.projectPath}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-140 h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex justify-between h-10 rounded-b-xl relative ">
                    <div className="text-white text-2xl font-projectTitle">{project.projectName}</div>
                    <Link
                    to={project.projectGithub}
                    target="_blank"
                    className="text-sand text-xs border-b border-sand/40 pb-0.5 hover:border-sand hover:text-dustpink transition-colors"
                    >
                    View on Github →
                    </Link>
                </div>
                <div className="mx-auto mt-4 w-2/3 h-6 rounded-full bg-black/30 blur-md" />
            </div>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="projectNames flex-1 min-w-[350px] max-w-[500px] h-[400px] overflow-y-auto rounded-4xl snap-y snap-mandatory"
                style={{ paddingBlock: "168px" }}
            >
                {projects.map((project, i) => (
                    <button
                        key={project.projectName}
                        onClick={() => scrollToProject(i)}
                        className="snap-center w-full text-left py-4 cursor-pointer font-projectTitle text-white border-b border-sand/40 py-10"
                    >
                        <span
                            className={`transition-all duration-200 ${
                                i === selectedProject
                                    ? "text-7xl text-white"
                                    : "text-4xl text-white/35"
                            }`}
                        >
                            {project.projectName}
                        </span>
                    </button>
                ))}
            </div>

        </section>

    )
}