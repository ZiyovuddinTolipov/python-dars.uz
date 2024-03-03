import { useState } from 'react';
import { SignUp } from '../api/ApiService';
import { toast } from "react-toastify";

function LoginPage() {
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // console.log(username,password);
        try {
            const data = await SignUp(firstName, username, password);
            // Handle successful login, such as setting user state or redirecting
            if (data.Status == 'created') {
                toast.succes("Hisob yaratildi!")
            } else if (data.Status == 'This username is already') {
                toast.error("username oldin ishlatilgan")
            } else {
                toast.warning("Hisob yaratishda xatolik");
            }
            console.log('Logged in:', data);
        } catch (error) {
            // Handle login error, such as displaying an error message
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
            <input type="text" placeholder="usernmae" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" minLength={4} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button onClick={handleLogin}>Hisob yaratish</button>
        </div>
    );
}

export default LoginPage;
