import React from 'react'
import notfound from '@images/whatever.jpg'

const NotFound: React.FC = () => {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <img src={notfound} className='w-[600px] h-[400px]' />
        </div>
    )
}

export default NotFound
