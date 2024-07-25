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
        const token = getCookie('access_token');
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

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await axiosInstance.post('/token/refresh/', null, { withCredentials: true });
                document.cookie = `access_token=${response.data.access}; path=/`;
                axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.access}`;
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                console.error('Error refreshing token', err);
                logout(); // Ensure to logout if refresh token fails
            }
        }

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

export default axiosInstance;
