import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const AdminMenu = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const result = confirm('hisobdan chiqmoqchimisz ?');
        if (result) {
            window.localStorage.clear();
            navigate("/")
            // console.log(true)
        } else {
            // Code to handle cancel action
        }
    };
    return (
        <div className=" flex flex-col justify-between h-full">
            <div className="flex flex-1 flex-col gap-6">
                <Link to="/">
                    <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-black relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-home"
                        >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <div className="max-lg:hidden font-bold">Bosh sahifa</div>
                    </button>
                </Link>
                <Link to=" ">
                    <button className="whitespace-nowrap text-sm font-mediumfocus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black hover:text-accent-foreground relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12 text-purple-500 border border-purple-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-map"
                        >
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                            <line x1="9" x2="9" y1="3" y2="18" />
                            <line x1="15" x2="15" y1="6" y2="21" />
                        </svg>
                        <div className="max-lg:hidden font-bold">Statistika</div>
                    </button>
                </Link>
                <Link to="/dashboard/add-course">
                    <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black hover:text-accent-foreground relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12 border">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-folder-kanban"
                        >
                            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                            <path d="M8 10v4" />
                            <path d="M12 10v2" />
                            <path d="M16 10v6" />
                        </svg>
                        <div className="max-lg:hidden font-normal">Kurs yaratish</div>
                    </button>
                </Link>
            </div>
            <button
                className="items-center justify-center whitespace-nowrap text-sm font-medium bg-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex w-full gap-1 rounded-sm  px-4 py-3 text-white"
                onClick={handleClick}
            >
                <p className="text-[15px] font-semibold text-primaryGradient max-lg:hidden">
                    Chiqish
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-in h-5 w-5"
                >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
            </button>
        </div>
    );
};

export default AdminMenu;
