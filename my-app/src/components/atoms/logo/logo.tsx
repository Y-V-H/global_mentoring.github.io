import React from 'react';
import { clsx } from 'clsx';

interface LogoProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Logo = ({className, onClick}: LogoProps) => {
    return (
        <a href="/" className={clsx(`a-logo ${className}`)} onClick={onClick}>
            <b>netflix</b>roulette
        </a>
    );
}