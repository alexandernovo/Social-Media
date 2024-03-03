import React from 'react'
import bg from '@images/bg.jpg'
import InputFloatingLabel from '@components/InputFloatingLabel'

const Login: React.FC = () => {
    return (
        <div className="h-[100vh] w-100 flex">
            <div className="lg:w-1/2 flex items-center h-[100%] justify-center">
                <img src={bg} />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-1/2">
                    <InputFloatingLabel Id='username' Label="Username" Class='mb-4' />
                    <InputFloatingLabel Id='password' Label="Password" Type='password' />
                </div>
            </div>
        </div>
    )
}

export default Login
