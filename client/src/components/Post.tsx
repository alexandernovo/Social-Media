import React from 'react'

interface PostProps {
    Class?: string
}

const Post: React.FC<PostProps> = (props: PostProps) => {
    const classes: string = `${props.Class} card w-100 h-[400px] bg-base-100 shadow-sm rounded-[8px]`;
    return (
        <div className={classes}>
            <div className="card-body">
                <div className='w-[45px] h-[45px] overflow-hidden border border-gray-300 rounded-full'>
                </div>
            </div>
        </div>
    )
}

export default Post
