import React from 'react';
import { clsx } from 'clsx';

export enum ButtonIconColor {
    PRIMARY= 'primary',
    SECONDARY= 'secondary'
}

export enum ButtonIconSize {
    SMALL= 'small',
    MEDIUM= 'medium'
}

interface ButtonIconProps {
    icon: string;
    color: string;
    buttonSize: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonName?: string;
}

export const ButtonIcon = ({icon, color, buttonSize, className, onClick, buttonName}:ButtonIconProps) => {
    return (
        <button
            type="button"
            name={buttonName}
            className={clsx(`icon a-btn-icon a-btn-icon__${color} a-btn-icon__${buttonSize} ${className} ${icon}`)}
            onClick={onClick}
        />
    );
}