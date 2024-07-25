// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('access_token');

        if (token) {
            axiosInstance.get('/profile/')
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user profile', error);
                    if (error.response.status === 401) {
                        logout();
                    }
                });
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        document.cookie = `access_token=${userData.access_token}; path=/`;
        document.cookie = `refresh_token=${userData.refresh_token}; path=/`;
    };

    const logout = () => {
        setUser(null);
        document.cookie = 'user=; Max-Age=0; path=/';
        document.cookie = 'access_token=; Max-Age=0; path=/';
        document.cookie = 'refresh_token=; Max-Age=0; path=/';
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const getCookie = (name) => {
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
};
