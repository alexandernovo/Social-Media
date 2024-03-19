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
                    <Navbar Class='px-3 top-0 sticky z-10' />
                    <div className='flex flex-1'>
                        <Sidebar Class='top-[63.99px] fixed px-3' />
                        <div className='bg-[#F0F3F4] flex-1 p-4 ms-[300px]'>
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
