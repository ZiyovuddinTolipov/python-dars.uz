import React, { useState } from "react";
import { toast } from "react-toastify"
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("message", message);

        try {
            const response = await fetch("https://api.example.com/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Serverda xato yuz berdi");
            }
            toast.success("Fayl muvaffaqiyatli yuklandi !", {
                position: "top-right"
            });
            // setAlertMessage("Fayl muvaffaqiyatli yuklandi");
        } catch (error) {
            console.error("Xato:", error);
            toast.error("Fayl yuklashda xatolik yuz berdi !", {
                position: "top-right"
            });
            // setAlertMessage("Fayl yuklashda xatolik yuz berdi");
        }
    };

    return (
        <div className="mx-auto w-full max-w-6xl custom-scrollbar">
            <form onSubmit={handleSubmit} className=" max-w-[1000px] mx-auto flex flex-col gap-4">
                <div className="w-full flex flex-col md:flex-row justify-between">
                    <label className="form-control w-full max-w-xs md:w-1/2">
                        <div className="label">
                            <span className="label-text">Video dars havolasi</span>
                        </div>
                        <input
                            type="text"
                            placeholder="link"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full md:w-1/2">
                        <div className="label">
                            <span className="label-text">Kurs mavzusi</span>
                        </div>
                        <textarea
                            className="textarea textarea-primary textarea-xs w-full max-w-xs"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div className="w-full flex flex-col md:flex-row md:justify-between justify-center ">
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary max-w-xs w-full"
                        onChange={handleChange}
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
