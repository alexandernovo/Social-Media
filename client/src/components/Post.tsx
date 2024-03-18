import React from 'react'

interface PostProps {
    Class?: string
}

const Post: React.FC<PostProps> = (props: PostProps) => {
    const classes: string = `${props.Class} card w-100 h-[400px] bg-base-100 shadow-xl`;
    return (
        <div className={classes}>
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Post
