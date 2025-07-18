"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import {TelegramIcon} from "@/app/icons/TelegramIcon";
import {InstagramIcon} from "@/app/icons/InstagramIcon";
import {YouTubeIcon} from "@/app/icons/YouTube";
import {usePathname} from "next/navigation";


export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openNavMobile, setOpenNavMobile] = useState(false);
    const pathname = usePathname();
    console.log('pathName ', pathname)

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

    const toggleNavMobile = () => setOpenNavMobile(!openNavMobile);

    const navMobile = openNavMobile && (
        <section className='fixed z-[1000] top-0 bottom-0 left-0 right-0 h-full w-full bg-black p-0'>
            <div className='h-full flex flex-col relative m-0 ml-auto'>
                <button className='w-6 h-6 block border-none text-white fixed z-10 top-7 right-7 cursor-pointer'
                        onClick={() => setOpenNavMobile(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path
                            d="m0 88.591 38.926-38.927L0 10.738 11.409 0l38.927 38.926L88.591 0 100 10.738 61.074 49.664 100
                            88.591 88.591 99.329 49.664 61.074 10.738 100z"
                            fill="currentColor"
                            fillRule="nonzero"
                        />
                    </svg>
                </button>
                <div className='w-full m-auto overflow-auto'>
                    <ul className='flex-col flex gap-8 overflow-hidden justify-between m-0' onClick={toggleNavMobile}>
                        <li className={`${pathname === '/' && styles.current_menu_item} text-center mt-4 mb-4 ml-0 mr-0`}>
                            <Link href="/#article" className="hover:text-gray-300 transition">About</Link>
                        </li>
                        <li className={`${pathname === '/repertoire' && styles.current_menu_item} text-center mt-4 mb-4 ml-0 mr-0`}>
                            <Link href="/repertoire" className="hover:text-gray-300 transition" scroll={false}>Repertoire</Link>
                        </li>
                        <li className={`${pathname === '/media' && styles.current_menu_item} text-center mt-4 mb-4 ml-0 mr-0`}>
                            <Link href="/media" className="hover:text-gray-300 transition" scroll={false}>Media</Link>
                        </li>
                        <li className={`${pathname === '/contact' && styles.current_menu_item} text-center mt-4 mb-4 ml-0 mr-0`}>
                            <Link href="/contact" className="hover:text-gray-300 transition" scroll={false}>Contact</Link>
                        </li>
                    </ul>
                    <ul className='flex gap-12 overflow-hidden justify-center mt-12'>
                        <li>
                            <Link href="https://t.me/Kristina_Sokova" target="_blank" rel="noopener noreferrer"
                                  className="flex items-center space-x-1 hover:text-blue-500 transition">
                                <TelegramIcon width='30' height='30'/>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/kristina_sokova?igsh=MWE1OTl4bzV4M2ZjbQ%3D%3D&utm_source=qr"
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center space-x-1 hover:text-pink-600 transition">
                                <InstagramIcon width='30' height='30'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://youtube.com/@kristinasokova3797?si=roZsYCsYrhHJazF4" target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 hover:text-red-600 transition">
                                <YouTubeIcon width='30' height='30'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );

    return (
        <header className={`
        fixed w-full z-50 bg-transparent text-white pt-[2.5rem] px-[3rem] h-auto pb-[3rem] ml-auto mr-auto transition-all duration-150 ease-in-out
        ${scrolled ? `${styles.scrolled} bg-white/50 ` : `${styles.not_scrolled}`}
        `}>
            <div className={`container mx-auto flex justify-between items-center max-w-7xl w-full md:h-[60px]`}>
                <div className={styles.logo}>
                    <Link href="/">Kristina Sokova</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex space-x-8 uppercase text-sm tracking-wider ${styles.header_gap}`}>
                    <Link href="/#article" className="hover:text-gray-300 transition">About</Link>
                    <Link href="/repertoire" className="hover:text-gray-300 transition" scroll={false}>Repertoire</Link>
                    <Link href="/media" className="hover:text-gray-300 transition" scroll={false}>Media</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition" scroll={false}>Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => {setOpenNavMobile(true)}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 25" className="w-[30px] h-[19px] text-white">
                        <g fill="currentColor">
                            <path d="M0 0h35v3H0zM0 11h35v3H0zM0 22h35v3H0z"/>
                        </g>
                    </svg>
                </button>

                {navMobile}
            </div>
        </header>
    )
}