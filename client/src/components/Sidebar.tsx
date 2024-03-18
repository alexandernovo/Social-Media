import React from "react";

const Sidebar: React.FC = () => {
    return (
        <div className="w-[250px] h-[100%] position-sticky top-0 bg-[#F0F3F4] p-3 pt-4">
            <ul>
                <li>
                    <div className="flex items-center gap-2">
                        <div className='w-[35px] h-[35px] overflow-hidden border border-gray-300 rounded-full'>
                        </div>
                        <p className="text-[14px] font-semibold">Alexander Novo</p>
                    </div>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Sidebar;



