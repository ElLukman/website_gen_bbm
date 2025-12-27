'use client';

import React, { useState, useRef, useEffect } from 'react';

// Tipe data untuk isi Dropdown (Opsional)
export interface DropdownItem {
    label: string;
    onClick?: () => void;
    href?: string;
}

interface ButtonGenFilterProps {
    label: string;          
    icon: React.ReactNode;  
    items?: DropdownItem[];  
    onClick?: () => void;    
    className?: string;      
}

export default function ButtonGenFilter({
    label,
    icon,
    items,
    onClick,
    className = ''
}: ButtonGenFilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const hasDropdown = items && items.length > 0;

    // Tutup dropdown kalau klik di luar area
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handler Klik Utama
    const handleButtonClick = () => {
        if (hasDropdown) {
            setIsOpen(!isOpen); 
        } else if (onClick) {
            onClick(); 
        }
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Button */}
            <button
                type="button"
                onClick={handleButtonClick}
                className={`flex min-w-35 items-center justify-between rounded-full bg-primary-6 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary-4 cursor-pointer hover:shadow-md focus:outline-none focus:ring-3 focus:ring-primary-6/50 ${className}`}
            >
                <span>{label}</span>

                <span className="ml-3 shrink-0 text-white">
                    {icon}
                </span>
            </button>

            {/* Dropdown */}
            {hasDropdown && isOpen && (
                <div className="absolute left-0 z-50 mt-2 w-48 origin-top-left overflow-hidden rounded-xl border border-secondary-10 bg-white shadow-xl ring-1 ring-black/5  animate-dropdown-enter">
                    <ul className="py-1">
                        {items.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        item.onClick?.();
                                        setIsOpen(false); 
                                    }}
                                    className="flex w-full items-center px-4 py-2.5 text-left text-sm font-medium text-radix-dark transition-colors hover:bg-radix-cream hover:text-primary-8 cursor-pointer"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}