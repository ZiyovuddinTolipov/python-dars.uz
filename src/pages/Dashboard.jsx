import { Link } from "react-router-dom";
import logo from "../assets/python-6.svg";
const Dashboard = () => {
    return (
        <main className="w-[100%] min-h-[100vh] bg-slate-950">
            <header className="fixed z-40 py-3 w-full pr-3 sm:px-12 bg-gray-900 border-b">
                <nav className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <img src={logo} alt="logo" className="h-12 mr-2" />
                    <ul>
                        <li className="text-xl font-semibold">Tolipov Z.</li>
                        <li></li>
                    </ul>
                </nav>
            </header>
            <section className="flex">
                <action className="custom-scrollbar sticky inset-x-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-32 max-sm:hidden lg:w-[300px] bg-gray-900">
                    <div className="flex flex-1 flex-col gap-6">
                        <a href="/">
                            <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12">
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
                        </a>
                        <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12 text-purple-500 border border-purple-500">
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
                        <Link to="add-course">
                            <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground relative flex items-center justify-start gap-4 rounded-sm p-4 transition w-full h-12 border">
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
                </action>
                <div className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-32 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-6xl custom-scrollbar">hello</div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
