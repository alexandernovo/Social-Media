import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className='h-[100vh] w-full absolute top-0 left-0 flex justify-center items-center'>
            <svg viewBox="0 0 240 240" height="240" width="240" className="pl">
                <circle strokeLinecap="round" strokeDashoffset="-330" strokeDasharray="0 660" strokeWidth="20" stroke="#000" fill="none" r="105" cy="120" cx="120" className="pl__ring pl__ring--a"></circle>
                <circle strokeLinecap="round" strokeDashoffset="-110" strokeDasharray="0 220" strokeWidth="20" stroke="#000" fill="none" r="35" cy="120" cx="120" className="pl__ring pl__ring--b"></circle>
                <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="85" className="pl__ring pl__ring--c"></circle>
                <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="155" className="pl__ring pl__ring--d"></circle>
            </svg>
        </div>
    )
}

export default Loading
