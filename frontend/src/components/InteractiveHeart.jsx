export default function InteractiveHeart({ role }) {
    return (
        <div className="relative min-h-screen min-w-screen bg-black z-6 flex flex-col items-center justify-center text-center">
            <div className="font-montserrat font-light text-white text-3xl">
                Pema Tashi
            </div>
            <div className="font-montserrat text-md text-white/60 mt-1">
                {role}
            </div>
        </div>
    )
}
