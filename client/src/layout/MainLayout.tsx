import React, { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const token = localStorage.getItem('token');
    return (
        <>
            {token ? (
                <div className="h-[100vh] flex flex-col">
                    <Navbar />
                    <div className='flex flex-1'>
                        <Sidebar />
                        {children}
                    </div>
                </div>
            ) :
                (
                    <div className="h-[100vh]">
                        {children}
                    </div>
                )}
        </>
    );
};

export default MainLayout
