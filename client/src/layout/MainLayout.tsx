import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="h-[100vh] flex flex-col">
            <Navbar />
            <div className='flex flex-1'>
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default MainLayout
