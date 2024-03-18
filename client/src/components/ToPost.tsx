import React from 'react'

interface ToPostProps {
    Class?: string
}

const ToPost: React.FC<ToPostProps> = (props: ToPostProps) => {
    const classes: string = `${props.Class} card w-100 bg-base-100 shadow-m`;
    return (
        <div className={classes}>
            <div className="card-body">
            </div>
        </div>
    )
}

export default ToPost
