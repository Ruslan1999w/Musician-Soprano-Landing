"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import galleryImageOne from "@/public/1.jpg";
import galleryImageTwo from "@/public/2.jpg";
import galleryImageThree from "@/public/3.jpg";
import galleryImageFour from "@/public/4.jpg";
import galleryImageFive from "@/public/5.jpeg";
import galleryImageSix from "@/public/6.jpeg";
import galleryImageSeven from "@/public/7.jpeg";
import galleryImageEight from "@/public/8.jpeg";
import galleryImageNine from "@/public/9.jpeg";
import galleryImageTen from "@/public/10.jpeg";
import galleryImageEleven from "@/public/11.jpeg";
import galleryImageTwelve from "@/public/12.jpeg";

const galleryImage = [
    { img: galleryImageOne, aspectRatio: "1:1" },
    { img: galleryImageTwo, aspectRatio: "3:2" },
    { img: galleryImageThree, aspectRatio: "17:12" },
    { img: galleryImageFour, aspectRatio: "29:20" },
    { img: galleryImageFive, aspectRatio: "3:2" },
    { img: galleryImageSix, aspectRatio: "3:2" },
    { img: galleryImageSeven, aspectRatio: "3:2" },
    { img: galleryImageEight, aspectRatio: "3:2" },
    { img: galleryImageNine, aspectRatio: "3:2" },
    { img: galleryImageTen, aspectRatio: "3:2" },
    { img: galleryImageEleven, aspectRatio: "3:2" },
    { img: galleryImageTwelve, aspectRatio: "3:2" },
];

export default function Media() {
    const lightGallerySettings = {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        thumbnail: true,
        zoom: true,
        actualSize: false,
        autoplay: false,
    };

    return (
        <div className="w-full mt-28 mb-28 pl-4 pr-4">
            <LightGallery
                elementClassNames="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-10 space-y-10"
                {...lightGallerySettings}
            >
                {galleryImage.map((image, index) => (
                    <a
                        href={image.img.src}
                        key={index}
                        className="block max-h-[1000px] max-w-[500px] h-auto w-auto overflow-hidden rounded-lg mb-10"
                        style={{ aspectRatio: image.aspectRatio }}
                    >
                        <Image
                            alt="Repertoire image"
                            src={image.img}
                            className="object-cover w-full h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority={index < 4}
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}