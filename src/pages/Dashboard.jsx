/* eslint-disable no-unused-vars */
import logo from "../assets/python-6.svg";
import AddCourse from '../components/AddCourse'
import Course from "./Course";
import AdminMenu from "../components/AdminMenu"
import { Routes, Route } from "react-router-dom"
import Statistic from "./Statistic";
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {
    return (
        <main className="w-[100%] min-h-[100vh] bg-slate-950">
            <header className="fixed z-40 py-3 w-full pr-3 sm:px-12 bg-gray-900 border-b">
                <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-0">
                    <img src={logo} alt="logo" className="h-8 md:h-12 mr-2" />
                    <ul className="flex items-center gap-3">
                        <li className="text-xl font-semibold">Hamroyev Sh.</li>
                        {/* <li><RxHamburgerMenu size={28}/></li> */}
                    </ul>
                </nav>
            </header>
            <section className="flex">
                <div className="custom-scrollbar sticky inset-x-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-32  lg:w-[300px] bg-gray-900">
                    {/* <CourseList /> */}
                    <AdminMenu />
                </div>
                <div className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-20 md:pt-32  max-md:pb-14 sm:px-14">
                    <Routes >
                        <Route path="/add-course" element={<AddCourse />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/" element={<Statistic />} />
                    </Routes>

                    {/* <AddCourse /> */}
                    {/* <Course /> */}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
