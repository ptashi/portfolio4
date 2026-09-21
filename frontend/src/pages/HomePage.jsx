export default function HomePage() {
    return (
        <div className="flex w-screen h-screen overflow-hidden">
            <div className="flex flex-col gap-10 flex-1 h-full justify-center items-center bg-burgundy transition-transform duration-200 hover:scale-105 hover:sand hover:z-5">
                <div className="text-4xl text-white font-projectTitle">
                    Developer Portfolio
                </div>
                <a href="/dev" className="text-white cursor-pointer transition-transform duration-200 hover:scale-105 border-b-2 border-white hover:border-dustpink hover:text-dustpink">Go To Portfolio</a>
            </div>
            <div className="flex flex-col gap-10 flex-1 h-full justify-center items-center bg-lace transition-transform duration-200 hover:scale-105 hover:sand hover:z-5">
                <div className="text-4xl text-white font-projectTitle">
                   Acting Portfolio
                </div>
                <a href="/actor" className="text-white cursor-pointer transition-transform duration-200 hover:scale-105 border-b-2 border-white hover:border-dustpink hover:text-dustpink">Go To Portfolio</a>
            </div>
        </div>
    )
}
