import React from 'react';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
interface MainLayoutProps {
    children: React.ReactNode,
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const token = localStorage.getItem('token');
    return (
        <>
            {token ? (
                <div className="h-[100vh] flex flex-col">
                    <Navbar />
                    <div className='flex flex-1'>
                        <Sidebar />
                        {props.children}
                    </div>
                </div>
            ) :
                (
                    <div className="h-[100vh]">
                        {props.children}
                    </div>
                )}
        </>
    );
};

export default MainLayout
