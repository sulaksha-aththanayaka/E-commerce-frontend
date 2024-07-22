import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user';

export const registerSeller = async (userData) => {
    const response = await axios.post(`${API_URL}/registerSeller`, userData, {withCredentials: true});
    return response;
}