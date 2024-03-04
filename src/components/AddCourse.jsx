import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddCourse, GetLessonsList } from "../api/ApiService";
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [courseTopic, setCourseTopic] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await AddCourse(videoURL, courseTopic, file);
            // Handle successful login, such as setting user state or redirecting
            if (!response.ok) {
                toast.error("So'rov bajarilmadi")
            } else if (response.data.Status == "Created") {
                toast.success("Kurs qo'shildi");
            } else {
                toast.warning("Xatolik yuz berdi");
            }
        } catch (error) {
            // Handle login error, such as displaying an error message
            console.error("Login error:", error);
        }
    };
    useEffect(() => {
        // Update the document title using the browser API
        try {
            const response = GetLessonsList(videoURL, courseTopic, file);
            // Handle successful login, such as setting user state or redirecting
            console.log(response.data)
        } catch (error) {
            // Handle login error, such as displaying an error message
            console.error("Login error:", error);
        }
    });

    return (
        <div className="mx-auto w-full max-w-6xl custom-scrollbar">
            <form
                onSubmit={handleSubmit}
                className=" max-w-[1000px] mx-auto flex flex-col gap-4"
            >
                <div className="w-full flex flex-col md:flex-row justify-between">
                    <label className="form-control w-full max-w-xs md:w-1/2">
                        <div className="label">
                            <span className="label-text">Video dars havolasi</span>
                        </div>
                        <input
                            type="text"
                            placeholder="link"
                            value={videoURL} onChange={(e) => setVideoURL(e.target.value)}
                            className="input input-bordered input-primary w-full max-w-xs"
                            required
                        />
                    </label>
                    <label className="form-control w-full md:w-1/2">
                        <div className="label">
                            <span className="label-text">Kurs mavzusi</span>
                        </div>
                        <textarea
                            className="textarea textarea-primary textarea-xs w-full max-w-xs"
                            value={courseTopic}
                            onChange={(e) => setCourseTopic(e.target.value)}
                            required
                        ></textarea>
                    </label>
                </div>
                <div className="w-full flex flex-col md:flex-row md:justify-between justify-center ">
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary max-w-xs w-full"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                    <div className="md:w-1/2 w-full mt-4 md:mt-0">
                        <button className="btn btn-success w-full max-w-xs" type="submit">
                            <span className="loading-spinner"></span>
                            Yuborish
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FileUpload;
