import React from 'react';

interface ButtonProps {
    label: string;
    width: string;
    height: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, width, height }) => {
    return (
        <button onClick={onClick} className='bg-purpleSymply/70 rounded-lg '>
            {label}
            <style>
                {`
                    width: ${width};
                    height: ${height};
                `}
            </style>
        </button>
    );
};

export default Button;