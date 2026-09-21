import ProjectShowcase from "../components/dev/ProjectShowcase";
import projectData from "../data/projectData";
import AboutMe from "../components/dev/AboutMe"
import InteractiveHeart from "../components/InteractiveHeart";


export default function DevPage() {
    return (
        <div className="min-w-screen items-center bg-burgundy min-h-screen flex flex-wrap justify-center">
            <InteractiveHeart role="DEVELOPER"/>
            <AboutMe />
            <ProjectShowcase projects={projectData} />
        </div>
    );
}
