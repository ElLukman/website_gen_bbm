'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';

interface ClientProps {
    title: string;
    content: string;
}

export default function GenAccordionClient({ title, content }: ClientProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mx-auto w-full overflow-hidden rounded-3xl border border-secondary-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 ${isOpen ? 'bg-secondary-6' : 'bg-white hover:bg-radix-cream'
                    }`}
            >
                <span className={`font-poppins text-xl md:text-4xl font-semibold ${isOpen ? 'text-radix-cream' : 'text-secondary-4'
                    }`}>
                    {title}
                </span>
                <svg
                    className={`h-6 w-6 shrink-0 transition-all duration-300 ${isOpen ? 'rotate-0 text-secondary-9' : '-rotate-90 text-other-gray'
                        }`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Animasi Dropdown */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                    <div className="pl-8 pr-6 py-5 text-sm md:text-xl text-radix-dark text-justify prose max-w-none prose-p:text-inherit prose-li:text-inherit prose-headings:text-inherit marker:font-bold marker:text-radix-dark">                        
                        <Markdown>{content}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    );
}