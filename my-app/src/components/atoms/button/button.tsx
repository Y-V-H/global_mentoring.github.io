import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
    children?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'submit' | 'reset' | 'button';
}

export const Button = ({
    children,
    className,
    onClick,
    type
}: ButtonProps) => {
    return (
        <button
            className={clsx(`a-btn`, className)}
            onClick={onClick}
            type={type || 'button'}
        >
            {children}
        </button>
    )
}