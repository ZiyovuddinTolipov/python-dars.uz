import React, { useState } from 'react';

const FileUpload = () => {
    const [progress, setProgress] = useState(0);

    const handleChange = (event) => {
        const file = event.target.files[0];
        const fileSize = file.size;
        let loaded = 0;

        const reader = new FileReader();
        reader.onload = (event) => {
            loaded += event.loaded;
            const percentLoaded = Math.round((loaded / fileSize) * 100);
            setProgress(percentLoaded);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <progress value={progress} max="100"></progress>
            <span>{progress}%</span>
        </div>
    );
};

export default FileUpload;
