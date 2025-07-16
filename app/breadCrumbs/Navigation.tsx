"use client";

import styles from "@/app/header/index.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";


export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`
        fixed
        w-full
        z-50 bg-transparent text-white pt-[2.5rem] px-[3rem]
        h-auto
        pb-[3rem]
        ml-auto
        mr-auto
        transition-all duration-150 ease-in-out
        ${scrolled ? `${styles.scrolled} bg-white/50 `: `${styles.not_scrolled}`}
        `}>
            <div className={`container mx-auto flex justify-between items-center max-w-7xl w-full h-[60px]`}>
                <div className={styles.logo}>
                    <Link href="/">Kristina Sokova</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex space-x-8 uppercase text-sm tracking-wider ${styles.header_gap}`}>
                    <Link href="/#article" className="hover:text-gray-300 transition">About</Link>
                    <Link href="/repertoire" className="hover:text-gray-300 transition" scroll={false}>Repertoire</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition" scroll={false}>Contact</Link>
                    <Link href="/media" className="hover:text-gray-300 transition" scroll={false}>Media</Link>
                </nav>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    )
}