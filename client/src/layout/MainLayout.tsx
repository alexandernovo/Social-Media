import React from 'react';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';
import Rightbar from '@components/Rightbar';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
interface MainLayoutProps {
    children: React.ReactNode,
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const isSignedIn: boolean = useSelector((state: RootState) => state.userState.isSignedIn);
    return (
        <>
            {isSignedIn ? (
                <div className="h-[100vh] flex flex-col">
                    <Navbar />
                    <div className='flex flex-1'>
                        <Sidebar />
                        <div className='bg-[#F0F3F4] flex-1 p-4'>
                            {props.children}
                        </div>
                        <Rightbar />
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
