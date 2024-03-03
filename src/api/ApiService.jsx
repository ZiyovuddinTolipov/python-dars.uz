import axios from 'axios'

const API_REGISTER = 'https://pycourse.pythonanywhere.com/v1';
const API_ADD_DATA = 'https://pycourse.pythonanywhere.com/v2';


export const Login = async (username, password) => {
    const credentials = `${username}:${password}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`
    };
    try {
        const response = await axios.post(`${API_REGISTER}/signin/`, {}, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
