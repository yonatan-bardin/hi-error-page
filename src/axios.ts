import axiosInstance from 'axios';

const axios = axiosInstance.create({
    withCredentials: true,
    timeout: 5000,
    baseURL: 'http://localhost:5000/api/wines',
});

export default axios;
