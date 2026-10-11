
export default function Skills() {
    const languages = [
        { name: "Python", url: "/assets/images/python.png" },
        { name: "C/C++", url: "/assets/images/c.png" },
        { name: "JavaScript", url: "/assets/images/js.png" },
        { name: "HTML", url: "/assets/images/html.png" },
        { name: "CSS", url: "/assets/images/css.png" },
    ];

    const frameworks = [
        { name: "Node.js"},
        { name: "React/Vite"},
        { name: "Flask"},
    ];
    return (
        <div className="min-w-screen min-h-screen flex flex-wrap flex-col items-center justify-center gap-30">
            <div className="flex flex-col text-white justify-center items-center">
                <div className="text-5xl mb-10 text-center font-projectTitle">
                    Languages
                </div>
                <div className="border-b-2 text-dustpink w-10 mb-10"></div>
                <div className="flex flex-wrap mx-20 gap-10 text-dustpink text-sm items-center">
                    {languages.map((lang) => (
                        <div className="flex flex-col border-1 w-40 h-30 rounded-xl p-6 justify-between items-center">
                            <img src={lang.url} alt={lang.name} className="w-10 h-10" />
                            <div className="text-sm text-lace">{lang.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col text-white justify-center items-center">
                <div className="text-5xl mb-10 text-center font-projectTitle">
                    Frameworks
                </div>
                <div className="border-b-2 text-dustpink w-10 mb-10"></div>
                <div className="flex flex-wrap mx-20 gap-10 text-dustpink text-sm justify-center items-center">
                    {frameworks.map((frames) => (
                        <div className="flex flex-col border-1 w-40 h-30 rounded-xl p-6 justify-center items-center">
                            <div className="text-xl font-projectTitle">{frames.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
