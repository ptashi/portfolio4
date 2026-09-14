import { useLocation, Link } from "react-router-dom"


export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    let roleTitle = "Unknown";

    if (pathname === "/actor") {
        roleTitle = "Actor"
    } else if (pathname === "/dev") {
        roleTitle = "Developer"
    } else {
        console.log("Something went wrong with fetching path name.");
    }

    return (
        <div className="flex sticky top-0 items-center justify-between p-8 h-15 min-w-screen bg-black text-white">

        <div className="flex gap-10">
            <div className="navListName">
            Pema Tashi
            </div>
            <div className="navListPosition">
            {roleTitle.toUpperCase()}
            </div>
        </div>

        <div className="flex items-center p-8">
            Contact
        </div>
        </div>

    );
};

