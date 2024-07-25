import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true, 
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const csrftoken = getCookie('csrftoken');
        if (csrftoken) {
            config.headers['X-CSRFToken'] = csrftoken;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            if (error.response.status === 401) {
                console.error('Authentication error:', error.response.data);
                window.location.href = '/login';
            } else if (error.response.status === 400) {
                let errorMessage = 'An error occurred. Please try again later.';
                if (error.response.data.email) {
                    errorMessage = error.response.data.email[0];
                } else if (error.response.data.password) {
                    errorMessage = error.response.data.password[0];
                } else if (error.response.data.detail) {
                    errorMessage = error.response.data.detail;
                } else if (typeof error.response.data === 'string') {
                    errorMessage = error.response.data;
                }
                throw new Error(errorMessage);
            }
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
