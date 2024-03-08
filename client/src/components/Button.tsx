import React from 'react';

interface ButtonProps {
    Type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
    Class?: string;
    OnClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const classes: string = `${props.Class} w-full py-3.5 rounded-2xl bg-pink-600 text-[13px] font-semibold text-white tracking-widest`;

    const handleClick = () => {
        if (props.OnClick) {
            props.OnClick();
        }
    };

    return (
        <button type={props.Type} className={classes} onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default Button;
