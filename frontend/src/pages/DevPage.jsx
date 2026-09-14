import ProjectShowcase from "../components/dev/ProjectShowcase"
import projectdata from "../data/projectData"



export default function DevPage() {

    return (
        <div className="min-w-screen items-center bg-burgundy min-h-screen flex flex-wrap justify-center">
            <ProjectShowcase projects={projectdata} />
        </div>
    )
}