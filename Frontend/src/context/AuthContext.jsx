import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { getCookie, setCookie, deleteCookie } from '../utils/cookies';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('access_token');

        if (token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            axiosInstance.get('/profile/')
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user profile', error);
                    if (error.response && error.response.status === 401) {
                        logout();
                    }
                });
        }
    }, []); // El array vacío asegura que useEffect solo se ejecute una vez al montar el componente

    const login = (userData) => {
        setUser(userData);
        setCookie('access_token', userData.access_token);
        setCookie('refresh_token', userData.refresh_token);
    };

    const logout = () => {
        setUser(null);
        deleteCookie('access_token');
        deleteCookie('refresh_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
