import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Interceptor para añadir el token de autorización y el token CSRF
axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // Agrega el token CSRF a las solicitudes
    const csrftoken = getCookie('csrftoken');
    if (csrftoken) {
        config.headers['X-CSRFToken'] = csrftoken;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Función para obtener el token CSRF
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

// Manejo de la respuesta y errores
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.error('Response error:', error.response.data);
            if (error.response.status === 401) {
                // Manejo de errores de autenticación
                console.error('Authentication error:', error.response.data);
                // Puedes agregar lógica para redirigir al usuario al login aquí
            }
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('Request error:', error.request);
        } else {
            // Algo pasó al preparar la solicitud
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

// Ejemplo de uso para el registro de un nuevo usuario
export const registerUser = async (email, password) => {
    try {
        const response = await axiosInstance.post('register/', {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw new Error('An error occurred, please try again later.');
    }
};

export default axiosInstance;
