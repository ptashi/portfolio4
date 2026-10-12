export default function ExtraInfo() {
    const info = [
        {title: "DTC Intern @ Synchrony", src:"#", info: ""},
        {title: "Yangkar Bhoeche", src:"#", info: ""},
        {title: "Teaching", src:"#", info: ""},
    ]
    return (
        <div className="extrainfosection flex flex-col flex-wrap justify-center items-center min-w-screen min-h-screen">
            <div className="title text-white font-projectTitle text-5xl mb-10">
                Extra
            </div>
            <div className="border-b-2 text-dustpink w-20 mb-10"></div>
            {info.map((proj) => {
                <div className="flex flex-wrap justify-between items-center">
                    <img src={proj.src} alt={proj.title} className="w-100 h-50 rounded-2xl transform hover:scale-110 duration-300" />
                    <div className="flex flex-col justify-center items-start">
                        <div className="infotitle text-white font-projectTitle text-2xl mb-10">{proj.title}</div>
                        <div className="infoParagraph text-md">{proj.info}</div>
                    </div>
                </div>

            })}
        </div>
    )
}
