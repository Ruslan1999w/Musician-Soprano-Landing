"use client"

import Image from 'next/image';

import galleryImageOne from '@/public/1.jpg';
import galleryImageTwo from '@/public/2.jpg';
import galleryImageThree from '@/public/3.jpg';
import galleryImageFour from '@/public/4.jpg';
import galleryImageFive from '@/public/5.jpeg';

import styles from './index.module.css';

const galleryImage = [
    {
        img: galleryImageOne,
        aspectRatio: '1:1'
    },
    {
        img: galleryImageTwo,
        aspectRatio: '3:2'
    },
    {
        img: galleryImageThree,
        aspectRatio: '17:12'
    },
    {
        img: galleryImageFour,
        aspectRatio: '29:20'
    },
    {
        img: galleryImageFive,
        aspectRatio: '3:2'
    },
];

export default function Media() {
    const galleryHtml = galleryImage.map((image) =>
        <div className='max-h-[500px] max-w-[800px] h-auto w-auto overflow-hidden'>
            <Image
                alt='Repertoire image'
                src={image.img}
                className={`object-cover`}
            />
        </div>
    );

    return(
            <div className='w-full mt-28 mb-28 pl-4 pr-4'>
                <div className='flex flex-wrap md:flex-row flex-col gap-20'>
                    {galleryHtml}
                </div>
            </div>
    )
}