import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
interface SidebarProps {
    Class?: string
}
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {

    const userState = useSelector((state: RootState) => state.userState);
    const name = `${userState.firstname} ${userState.lastname}`;
    const classes = `${props.Class} w-[300px] h-[100%] bg-[#F0F3F4] p-3 pt-4`;

    return (
        <div className={classes}>
            <ul>
                <li>
                    <div className="flex items-center gap-2">
                        <div className='w-[35px] h-[35px] overflow-hidden border border-gray-300 rounded-full'>
                        </div>
                        <p className="text-[14px] font-semibold">{name}</p>
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Sidebar;



