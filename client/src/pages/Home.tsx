import React from 'react'
import ToPost from '@/components/ToPost'
import Post from '@/components/Post'

const Home: React.FC = () => {
    return (
        <div>
            <ToPost Class='mb-3' />
            <Post />
        </div>
    )
}

export default Home
