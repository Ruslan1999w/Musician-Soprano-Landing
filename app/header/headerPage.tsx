"use client"

import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import {StaticImageData} from "next/image";

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
type ValidPaths = '/' | '/repertoire' | '/contact' | '/media';
type Pages = {
    [key in ValidPaths]: PageData;
};

const logo: Pages = {
    '/repertoire': {
        title: 'Repertoire',
        img: repertoireBackground,
    },
    '/': {
        title: 'Kristina Sokova',
        img: contactBackground
    },
    '/contact': {
        title: 'Contact',
        img: mediaBackground
    },
    '/media': {
        title: 'Media',
        img: backgroundImage
    }
}


export const HeaderPage = () => {
    const pathname = usePathname();
    const animatedElem = useRef<HTMLParagraphElement | null>(null);

    useLayoutEffect(() => {
        const element = animatedElem.current;
        if (element) {
            element.classList.remove(styles.animated);
            void element.offsetWidth;
            setTimeout(() => {
                element.classList.add(styles.animated);
            }, 300)
        }

    }, [pathname])


    if (!logo[pathname as ValidPaths]?.img) {
        return null;
    }

    return (
        <section className='relative min-h-[600px] max-h-[800px] h-screen flex'>
            <Image
                src={logo[pathname as ValidPaths]?.img}
                alt="Kristina Sokova"
                className={styles['page-header__image']}
            />
            <div className={`${styles.page_title} ${styles.animated}`} ref={animatedElem}>
                {logo[pathname as ValidPaths]?.title}
            </div>
        </section>
    );
};