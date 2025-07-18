"use client"

import Image from 'next/image';

import styles from './index.module.css';
import useFancybox from "@/app/media/hooks/useFancybox";
import mediaBackgroundSec from '@/public/Dokumentname_farbe_8.jpg'
import PlayIcon from "@/app/media/Play";

export default function Media() {
    const [fancyboxRef] = useFancybox({
        // Your custom options
    });

    return(
        <section className={styles.current_logo}>
            <div className='w-full mt-28 mb-28' ref={fancyboxRef}>
                {/*<a*/}
                {/*    href="https://www.youtube.com/embed/UAwLgYIWD0I?autoplay=1"*/}
                {/*    data-fancybox*/}
                {/*    className="cursor-pointer block"*/}
                {/*>*/}
                {/*    <img*/}
                {/*        src={mediaBackground.src} // Миниатюра YouTube*/}
                {/*        alt="Посмотреть видео"*/}
                {/*        className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-xl h-[400px]"*/}
                {/*    />*/}
                {/*</a>*/}

                <a
                    href="https://www.youtube.com/embed/UAwLgYIWD0I?autoplay=1"
                    data-fancybox
                    className="cursor-pointer relative"
                >
                    <PlayIcon
                        className='absolute w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>

                    <Image
                        src={mediaBackgroundSec}
                        alt="Посмотреть видео"
                        className={`${styles['page-header__image']} aspect-square max-h-[900px]`}
                    />
                </a>
            </div>
        </section>
    )
}