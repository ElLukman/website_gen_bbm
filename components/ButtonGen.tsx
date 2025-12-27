"use client";

import React from "react";
import Link from "next/link";


interface GenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string; 
}

export default function GenButton({ children, className, href, ...props }: GenButtonProps) {
    const buttonStyle = `
        font-poppins rounded-full text-xl px-6 py-2 text-center flex flex-col justify-center
        transition-all duration-300 shadow-md focus:ring-4 focus:outline-none
        bg-secondary-6 hover:bg-primary-6 text-white focus:ring-secondary-3 border-transparent
        active:bg-primary-6 active:text-primary-6   

        md:w-50 md:h-15 my-4 cursor-pointer
        ${className || ""}
    `;

    if (href) {
        return (
            <Link href={href} className={buttonStyle}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonStyle} {...props}>
            {children}
        </button>
    );
}