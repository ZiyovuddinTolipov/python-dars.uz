import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [progress, setProgress] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);

        try {
            const response = await fetch('https://api.example.com/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Serverda xato yuz berdi');
            }

            setAlertMessage('Fayl muvaffaqiyatli yuklandi');
        } catch (error) {
            console.error('Xato:', error);
            setAlertMessage('Fayl yuklashda xatolik yuz berdi');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Ism"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">Yuklash</button>
            </form>
            <progress value={progress} max="100"></progress>
            <span>{progress}%</span>
            <div>{alertMessage}</div>
        </div>
    );
};

export default FileUpload;
