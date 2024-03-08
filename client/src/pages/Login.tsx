import React, { useState } from 'react'
import bg from '@images/bg.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InputFloatingLabel from '@components/InputFloatingLabel'
import Button from '@components/Button'
import { useDispatch } from 'react-redux';
import { storeUser } from '@store/user/userSlice';

const Login: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<{ errorCall: string; message: string } | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/users/auth', { username, password });
            if (response.data && response.data.status === 'success') {
                const { token, userdata } = response.data;
                console.log(response.data);
                const userToStore = {
                    token: token,
                    firstname: userdata.firstname,
                    lastname: userdata.lastname,
                    isSignedIn: true
                }

                dispatch(storeUser(userToStore));
                localStorage.setItem('token', token);
                navigate('/home');
            }
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                setError({
                    errorCall: error.response.data.errorCall,
                    message: error.response.data.message
                });
            }
        }
    };

    return (
        <div className="h-[100vh] w-100 flex">
            <div className="lg:w-1/2 flex items-center h-[100%] justify-center">
                <img src={bg} />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <InputFloatingLabel Id='username' OnChange={handleUsernameChange} Label="Username" />
                            {error?.errorCall === 'username' && (
                                <p className='m-0 text-[12px] text-red-500 mt-1'>{error.message}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <InputFloatingLabel Id='password' OnChange={handlePasswordChange} Label="Password" Type='password' />
                            {error?.errorCall === 'password' && (
                                <p className='m-0 text-[12px] text-red-500 mt-1'>{error.message}</p>
                            )}
                        </div>
                        <Button Type='submit'>SIGN IN</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
