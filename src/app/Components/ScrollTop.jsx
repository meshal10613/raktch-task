"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import BackTop from '@/app/image/top.png'

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {
                isVisible &&
                <div onClick={scrollToTop} className="w-20 h-20 rounded-full fixed right-5 bottom-5 cursor-pointer">
                    <Image src={BackTop} alt="BackToTop"/>
                </div>
            }
        </div>
    )
}
