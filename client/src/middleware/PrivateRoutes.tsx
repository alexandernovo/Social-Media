import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '@/components/Loading';
import { storeUser } from '@store/user/userSlice';
import { useDispatch } from 'react-redux';

const PrivateRoutes: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const delayLoading = () => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(delay);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.post('/api/users/authToken', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                if (response.data.status === "valid") {
                    const userData: any = response.data.user;

                    const userToStore = {
                        _id: userData._id,
                        token: token,
                        firstname: userData.firstname,
                        lastname: userData.lastname,
                        isSignedIn: true
                    }

                    dispatch(storeUser(userToStore));
                    setAuthenticated(true);
                }
            }).catch((error) => {
                console.log('Token verification error: ', error);
            }).finally(() => {
                delayLoading();
            });
        } else {
            delayLoading();
        }
    }, []);

    if (loading) {
        return <Loading />; // Render loading component while loading
    }

    return authenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
