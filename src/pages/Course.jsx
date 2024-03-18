import CourseList from "../components/CourseList"
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import { addComplate } from "../api/ApiService";
import {toast} from 'react-hot-toast'

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const [lesson, setLessons] = useState([]);
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${localStorage.getItem('token')}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        fetch(`https://pycourse.pythonanywhere.com/v2/get_lesson/${searchParams.get('course_id')}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setLessons(result))
            .catch((error) => console.error(error));
    }, [searchParams]); // searchParams o'zgaruvchisi dependency listga qo'shildi

    // const AddComplateCourse =  (lessonID) => {
    //     // console.log(`https://bkscoring.algorithmic.uz/api/Auth?userName=${username}&password=${password}`)
    //     try {
    //         const response = addComplate( lessonID);
    //         console.log(response);
    //     } catch (error) {
    //         toast.error('qandaydir xatolik!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             });
    //     }
    // };
    // onClick={AddComplateCourse(lesson.id)}>
    return (
        <main className="w-[100%] min-h-[100vh] bg-slate-950">
            <Navbar />
            <section className="flex">
                <div className="custom-scrollbar sticky inset-x-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-32  lg:w-[300px] bg-gray-900">
                    <CourseList />
                </div>
                <div className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-20 md:pt-32  max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">
                        <div className="" data-vimeo-initialized="true">
                            <div style={{ padding: "61.93% 0 0 0", position: "relative" }}>
                                <video
                                    src={lesson.url}
                                    frameBorder="0"
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    title={lesson.name}
                                    autoPlay
                                    controls
                                />
                            </div>
                        </div>
                        <div className="p-4 lg:p-8 bg-slate-900 mt-4 rounded-md flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <h1 className="text-2xl font-bold text--white">#{lesson.id-1} {lesson.name}.</h1>
                            <Link to={lesson.file} className="btn btn-success" target="_blank" download>topshiriq</Link>
                            
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium btn btn-info transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                <span className="pr-2">Darsni yakunlash</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-check-circle "
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
