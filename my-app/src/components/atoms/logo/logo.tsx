import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface LogoProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Logo = ({ className, onClick }: LogoProps) => {
    return (
        <Link href="/search" className={clsx(`a-logo`, className)} onClick={onClick}>
            <b>netflix</b>roulette
        </Link>
    );
}