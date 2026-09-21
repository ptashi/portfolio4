import { useLocation, Link } from "react-router-dom"


export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    let roleTitle = "Unknown";

    if (pathname === "/actor") {
        roleTitle = "Actor"
    } else if (pathname === "/dev") {
        roleTitle = "Developer"
    } else if (pathname === "/contact") {
        roleTitle = "Contact Me"
    } else if (pathname === "/") {
        roleTitle = "Home Page"
    } else {
        console.log("Something went wrong with fetching path name.");
    }

    return (
        <div className="flex absolute top-0 items-center justify-between p-8 h-15 min-w-screen bg-black text-white z-10">

        <div className="flex gap-10 justify-center">
            <div className="navListName hover:cursor-pointer hover:text-dustpink">
            Pema Tashi
            </div>
            <div className="navListPosition font-projectTitle text-xl">
            {roleTitle.toUpperCase()}
            </div>
        </div>

        <a href={"/contact"} className="flex items-center p-1 hover:cursor-pointer hover:text-dustpink transition-transform duration-200 hover:scale-103">
            Contact
        </a>
        </div>

    );
};

