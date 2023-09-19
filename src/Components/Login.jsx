import { useState } from "react"
import { toast } from 'react-toastify';
import axios from "axios";
// import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    // const [token, setToken] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = formData;

        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);

        const config = {
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
            },
        };

        try {
            const response = await axios.post('http://webbookshop.pythonanywhere.com/admins/checkin/', null, config);
            console.log('Response:', response.data);
            localStorage.setItem('token',encodedCredentials); 
            response.data.success ? navigate('/admin') : ""
        } catch (error) {
            console.error( error);

            toast.error(` ${error.response.status} username or password error`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const style = {
        container: `w-full sm:mt-6 md:mt-10  flex justify-center items-center`,
        form: `max-w-[400px] bg-slate-700 w-full p-3 flex flex-col items-center rounded-md min-h-[400px] justify-center`,
        headText: `text-center font-bold text-2xl mb-3 text-slate-200`,
        input: `outline-none  bg-slate-600 w-full my-2 p-2 rounded-md max-w-[300px] text-slate-300`,
        button: `outline-none bg-slate-600 text-slate-100 w-full max-w-[300px] rounded-md py-2 m-0 text-md font-bold`,
    }
    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <AiOutlineUser size={50} className="text-slate-200" />
                <h1 className={style.headText}>Admin</h1>
                <label htmlFor="username" className="text-left max-w-[300px] w-full mx-auto text-slate-100 capitalize pl-2">username</label>
                <input
                    id="username"
                    type="text"
                    className={style.input}
                    placeholder="enter username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    autoFocus
                />
                <label htmlFor="username" className="text-left max-w-[300px] w-full mx-auto text-slate-100 capitalize pl-2">username</label>
                <input
                    type="text"
                    className={style.input}
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button className={style.button} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignIn