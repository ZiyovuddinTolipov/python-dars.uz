import  { useState } from 'react';
import {Login} from '../api/ApiService';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log(username,password);
        try {
            const data = await Login(username, password);
            // Handle successful login, such as setting user state or redirecting
            console.log('Logged in:', data);
        } catch (error) {
            // Handle login error, such as displaying an error message
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="usernmae" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
