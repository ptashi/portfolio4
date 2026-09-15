import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ projects }) {
    const [selectedProject, setSelectedProject] = useState(0);
    const containerRef = useRef(null);

    // Highlight whichever item is crossing the container's center line, letting
    // native CSS scroll-snap handle the actual scrolling/snapping.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const centered = entries.find((entry) => entry.isIntersecting);
                if (centered) setSelectedProject(Number(centered.target.dataset.index));
            },
            { root: container, rootMargin: "-50% 0px -50% 0px", threshold: 0 },
        );

        container.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [projects]);

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
                className="projectNames flex-1 min-w-[350px] max-w-[500px] h-[400px] overflow-y-auto rounded-4xl overscroll-y-contain"
                style={{ paddingBlock: "168px" }}
            >
                {projects.map((project, i) => (
                    <div
                        key={project.projectName}
                        data-index={i}
                        className="w-full h-32 flex items-center text-left cursor-pointer font-projectTitle text-white border-b border-sand/40"
                    >
                        <span
                            className={`text-4xl origin-left transition-transform duration-200 ${
                                i === selectedProject ? "scale-150 text-white" : "scale-100 text-white/35"
                            }`}
                        >
                            {project.projectName}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
