import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const apiService = {
    register: async (username, password) => {
        return axios.post(`${API_URL}/auth/register`, { username, password });
    },
    login: async (username, password) => {
        return axios.post(`${API_URL}/auth/login`, { username, password });
    },
    createNote: async (title, content) => {
        return axios.post(`${API_URL}/notes`, { title, content }, { headers: { Authorization: localStorage.getItem('token') } });
    },
    getNotes: async () => {
        return axios.get(`${API_URL}/notes`, { headers: { Authorization: localStorage.getItem('token') } });
    }
};

export default apiService;
