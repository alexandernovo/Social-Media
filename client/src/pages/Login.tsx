import React from 'react'
import bg from '../assets/images/bg.jpg'
import InputFloatingLabel from '../components/InputFloatingLabel'

const Login: React.FC = () => {
    return (
        <div className="h-[100vh] w-100 flex">
            <div className="lg:w-1/2 flex flex-col items-center h-[100%] justify-center">
                {/* <p className="font-bold text-[30px]">Platform that connect us together.</p> */}
                <img src={bg} />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-1/2">
                    <InputFloatingLabel label="Username" classes='mb-4' />
                    <InputFloatingLabel label="Password" type='password' />
                </div>
            </div>
        </div>
    )
}

export default Login
