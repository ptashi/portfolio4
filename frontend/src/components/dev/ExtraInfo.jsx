export default function ExtraInfo() {
    const info = [
        {title: "DTC Intern at Synchrony", 
            src:"/assets/images/syffriend.jpg", 
            info: `I started at Synchrony the summer of 2026, where I serve as a Business Analyst on the Generative AI team. 
            
            Our work revolves around an org-wide AI tool, where I take up any issues regarding that tool, and provision licenses. My other work includes automation of processes (as our team currently does a lot of manual work), documentation, UI design/creation (Chatbot UI, in-site script runner environment), as well as work with Power Apps Forms and Power Automate Flows. I also take charge of onboarding for new interns on our team!`
        },
        {title: "Yangkar Bhoeche", 
            src:"/assets/images/ybgirls.jpg", 
            info: `Yangkar Bhoeche is a growing online retail business I founded toward the end of 2025. 
            
            Growing up in the U.S., I noticed how many of us in the Tibetan community—especially younger generations—can feel disconnected from our roots. Cultural traditions are rich and meaningful, yet they are not always accessible, especially in a foreign country. I started this business as a way to bridge traditional Tibetan culture with modern expression. 
            
            The name itself is rooted in Tibetan symbolism, where "yangkar" represents pure prosperity and good fortune. Alongside my partner, we have been working diligently in the Tri-State Area and growing our network across the country.`
        },
        {title: "Teaching", 
            src:"/assets/images/tibetankids.jpg", 
            info: `I have been volunteering for the Tibetan American Community of Connecticut for over five years, working with young students to teach Tibetan language, culture, and traditions. It has been one of my greatest joys to see these generations grow and build a stronger connection to their identity.

            As a teacher, I have never been prouder. I have always focused on creating a space where learning is engaging, adapting lessons in ways that encourage students to continue building their knowledge.

            ← These are my students from last year, and I hope they aren't the last!`
            ,
        }
    ]
    return (
        <div className="extrainfosection flex flex-col flex-wrap justify-center items-center min-w-screen mb-20">
            <div className="title text-white font-projectTitle text-5xl mb-10">
                Extra
            </div>
            <div className="border-b-2 text-dustpink w-20 mb-10"></div>
            <div className="container flex flex-col gap-20 ">
                {info.map((proj) => (
                    <div className="flex flex-wrap justify-between items-center">
                        <img src={proj.src} alt={proj.title} className="w-140 h-95 rounded-2xl transform hover:scale-110 duration-300" />
                        <div className="flex flex-col justify-center items-start w-200">
                            <div className="infotitle text-sand text-2xl mb-5 pb-5 border-b-1">{proj.title}</div>
                            <div className="infoParagraph whitespace-pre-line text-l text-white font-light leading-8">{proj.info}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
