import axios from 'axios'

const API_URL = 'http://localhost:5000/api/product';

export const getAllProducts = async () => {
    const response = await axios.get(`${API_URL}/getProducts`, {withCredentials: true});
    return response;
}

export const getProductById = async (id) => {
    const response = await axios.get(`${API_URL}/getProduct/${id}`)
    return response;
}

export const getProductByName = async (searchTerm) => {
    const response = await axios.get(`${API_URL}/getProductByName/${searchTerm}`);
    return response;
}