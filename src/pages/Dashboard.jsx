/* eslint-disable no-unused-vars */
import AddCourse from '../components/AddCourse'
import Course from "./Course";
import AdminMenu from "../components/AdminMenu"
import { Routes, Route } from "react-router-dom"
import Statistic from "./Statistic";
import CourseList from "../components/CourseList"
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "../components/Navbar";
// import {useNavigation} from "react-router-dom"

const Dashboard = () => {
    // const navigate = useNavigation();

    // localStorage.getItem("role")=="Admin" ? navigate(''):navigate('/')
    return (
        <main className="w-[100%] min-h-[100vh] bg-slate-950">
            <Navbar />
            <section className="flex">
                <div className="custom-scrollbar sticky inset-x-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-32  lg:w-[300px] bg-gray-900">
                    <Routes >
                        <Route path="/dashboard/" element={<AdminMenu />} />
                        <Route path="/course" element={<CourseList />} />
                    </Routes>
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
