import React, { FormEvent, ChangeEvent } from 'react';

interface InputFloatingLabelProps {
    Label?: string;
    Id?: string;
    Name?: string;
    Type?: string;
    Value?: string;
    Required?: boolean;
    OnChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
    Class?: string;
    OnInput?: (event: FormEvent<HTMLInputElement>) => void | null;
    OnClick?: () => void | null;
}

const InputFloatingLabel: React.FC<InputFloatingLabelProps> = (props: InputFloatingLabelProps) => {
    const className = `${props.Class} block rounded-2xl px-2.5 pb-3.5 pt-4 indent-1 w-full text-sm text-black bg-white border border-gray-400 appearance-none text-black focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`;
    return (
        <div className='w-full relative'>
            <input
                className={className}
                id={props.Id}
                name={props.Name}
                type={props.Type}
                autoComplete={props.Name}
                placeholder=""
                value={props.Value}
                onChange={props.OnChange}
                onInput={props.OnInput}
                onClick={props.OnClick}
                required={props.Required}
            />
            {props.Label && (
                <label htmlFor={props.Id} className="absolute text-sm text-gray-500 px-2 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6">
                    {props.Label}
                </label>
            )}
        </div>
    );
};

export default InputFloatingLabel;
