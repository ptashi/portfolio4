export default function AboutMe() {
    return (
        <div className="flex flex-wrap content-center justify-center items-center w-full min-h-screen gap-x-20 gap-y-6 px-5 sm:px-24">
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <img
                    src="/assets/images/headshotnew.jpg"
                    alt="my headshot"
                    className="rounded-full h-56 w-56 object-cover ring-1 ring-white/20 shadow-2xl"
                />
                <div className="w-10 h-px bg-dustpink" />
            </div>

            <div className="flex flex-col gap-7 max-w-2xl font-montserrat font-light">
                <p className="text-white text-3xl leading-snug">
                    Hi, my name is Pema Tashi, and I am a Computer Science major at the University of Connecticut.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                    I am currently an intern at Synchrony in the Digital Technology Center, where I work on the Generative AI Developer Team.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                    Outside of my academic work, I founded an online clothing business called Yangkar Bhoeche, focused on traditional × modern Tibetan clothing and accessories.
                </p>
            </div>
        </div>
    )
}
