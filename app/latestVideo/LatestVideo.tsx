"use client"

import Image from 'next/image';

import mediaBackgroundSec from '@/public/latest_video.jpg'
import PlayIcon from "@/app/media/Play";

import styles from './index.module.css';

export function LatestVideo() {
    return(
        <div className='w-full mt-28 relative'>
            <h2 className={`
            w-full absolute
            top-0 right-0 z-10
            text-center text-[clamp(3.125rem,7vw+1rem,7.5rem)]
            mt-0
            ${styles.videoHeader}
            `}>Latest video</h2>

            <div className="cursor-pointer">
                <a
                    href="https://www.youtube.com/embed/UAwLgYIWD0I?autoplay=1"
                >
                    <PlayIcon
                        className='absolute w-32 h-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>

                    <Image
                        src={mediaBackgroundSec}
                        alt="Посмотреть видео"
                        className={`aspect-square max-h-[900px] object-cover`}
                    />
                </a>
            </div>
        </div>
    )
}