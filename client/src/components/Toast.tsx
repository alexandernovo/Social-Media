import React from 'react'

interface ToastProps {
    Message: string,
    Success: boolean,
    Position?: string
}
const Toast: React.FC<ToastProps> = (props: ToastProps) => {
    const color: string = `alert ${props.Success ? 'alert-success' : 'alert-danger'}`;

    let position: string = 'toast ';

    if (props.Position == null) {
        props.Position = 'Bottom';
    }

    switch (props.Position.toLowerCase()) {
        case 'Top':
            position += 'toast-top';
            break;
        case 'Bottom':
            position += 'toast-bottom';
            break;
        case 'Center':
            position += 'toast-center';
            break;
        case 'Right':
            position += 'toast-end';
            break;
        case 'Left':
            position += 'toast-start';
            break;
        case 'Middle':
            position += 'toast-middle';
            break;
        case 'TopMiddle':
            position += 'toast-middle toast-top';
            break;
        case 'TopRight':
            position += 'toast-top toast-end';
            break;
        case 'BottomRight':
            position += 'toast-bottom toast-end';
            break;
        case 'BottomLeft':
            position += 'toast-bottom toast-start';
            break;
        default:
            position += 'toast-bottom'; // Default to 'toast-center' if the position is not recognized
    }

    return (
        <div className={position}>
            <div className={color}>
                <span>{props.Message}</span>
            </div>
        </div>
    )
}

export default Toast
