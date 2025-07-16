"use client"

import { usePathname } from 'next/navigation';
import { useRef, useLayoutEffect, useState} from "react";
import {StaticImageData} from "next/image";
import Link from 'next/link';

import styles from './index.module.css';
import backgroundImage from "@/public/Dokumentname_farbe_75.jpg";
import aboutBackground from '@/public/IMG_0179.jpg';
import contactBackground from '@/public/photo_2025-05-19_21-16-02.jpg';
import repertoireBackground from '@/public/IMG_0242.jpg'
import mediaBackground from '@/public/Dokumentname_farbe_88.jpg'

type PageData = {
    title: string;
    img: StaticImageData;
};
type ValidPaths = '/' | '/about' | '/repertoire' | '/contact' | '/media';
type Pages = {
    [key in ValidPaths]: PageData;
};

const logo: Pages = {
    '/repertoire': {
        title: 'Repertoire',
        img: repertoireBackground,
    },
    '/about': {
        title: 'About Kristina',
        img: aboutBackground
    },
    '/': {
        title: 'Kristina Sokova',
        img: contactBackground
    },
    '/contact': {
        title: 'Contact',
        img: mediaBackground //media swap
    },
    '/media': {
        title: 'Media',
        img: backgroundImage // contact
    }
}


export const Header = () => {
    const pathname = usePathname();
    const animatedElem = useRef<HTMLParagraphElement | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useLayoutEffect(() => {
        const element = animatedElem.current;
        if (element) {
            element.classList.remove(styles.animated);
            void element.offsetWidth;
            setTimeout(() => {
                element.classList.add(styles.animated);
            }, 300)
        }

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
    }, [pathname])
    console.log('scrolled ', scrolled);

    const navHeaderHtml = (
        <header className="
        relative h-screen top-0 left-0 w-full
        z-50 bg-transparent text-white pt-[2.5rem] px-[3rem]
        pb-[3rem]
        ">
            <div
                className={`fixed container mx-auto px-4 py-6 flex justify-between items-center max-w-7xl ${styles.scrolled} w-full`}>
                <div className={styles.logo}>
                    <Link href="/" scroll={false}>Kristina Sokova</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex space-x-8 uppercase text-sm tracking-wider ${styles.header_gap}`}>
                    <Link href="/about" className="hover:text-gray-300 transition" scroll={false}>About</Link>
                    <Link href="/repertoire" className="hover:text-gray-300 transition" scroll={false}>Repertoire</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition" scroll={false}>Contact</Link>
                    <Link href="/media" className="hover:text-gray-300 transition" scroll={false}>Media</Link>
                </nav>

                {/*/!* Mobile Menu Button *!/*/}
                {/*<button*/}
                {/*    className="md:hidden"*/}
                {/*>*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        className="h-6 w-6"*/}
                {/*        fill="none"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*        stroke="currentColor"*/}
                {/*    >*/}
                {/*        <path*/}
                {/*            strokeLinecap="round"*/}
                {/*            strokeLinejoin="round"*/}
                {/*            strokeWidth={2}*/}
                {/*            d="M4 6h16M4 12h16M4 18h16"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*</button>*/}
            </div>
        </header>
    );

    return (
        <>
            <img
                src={logo[pathname as ValidPaths].img.src}
                alt="Kristina Sokova"
                className={styles['page-header__image']}
            />
            {navHeaderHtml}
            <div className={`${styles.page_title} ${styles.animated}`} ref={animatedElem}>
                {logo[pathname as ValidPaths].title}
            </div>
        </>
    );
};