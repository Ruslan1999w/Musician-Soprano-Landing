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
import galleryImageThirteen from "@/public/13.jpg";
import galleryImageFourTeen from "@/public/14.jpeg";

const galleryImage = [
    { img: galleryImageOne, aspectRatio: "1:1", alt: "Kristina Sokova as Adele at the masquerade ball in Die Fledermaus, Landestheater Detmold" },
    { img: galleryImageTwo, aspectRatio: "3:2", alt: "Kristina Sokova as Adele reading a note in Die Fledermaus, Landestheater Detmold" },
    { img: galleryImageThree, aspectRatio: "17:12", alt: "Kristina Sokova with the ensemble in the ball scene of Die Fledermaus, Landestheater Detmold" },
    { img: galleryImageFour, aspectRatio: "29:20", alt: "Kristina Sokova as Adele dancing in Die Fledermaus, Landestheater Detmold" },
    { img: galleryImageFive, aspectRatio: "3:2", alt: "Kristina Sokova as Blonde confronting Osmin in Die Entführung aus dem Serail" },
    { img: galleryImageSix, aspectRatio: "3:2", alt: "Kristina Sokova performing a song recital with piano accompaniment, Hochschule für Musik Detmold" },
    { img: galleryImageSeven, aspectRatio: "3:2", alt: "Kristina Sokova as Galathée posed as a living statue in Die schöne Galathée, Sommertheater Detmold" },
    { img: galleryImageEight, aspectRatio: "3:2", alt: "Kristina Sokova as Galathée drinking wine in Die schöne Galathée, Sommertheater Detmold" },
    { img: galleryImageNine, aspectRatio: "3:2", alt: "Kristina Sokova performing a recital, Hochschule für Musik Detmold" },
    { img: galleryImageTen, aspectRatio: "3:2", alt: "Kristina Sokova in a staged opera scene, Hochschule für Musik Detmold" },
    { img: galleryImageEleven, aspectRatio: "3:2", alt: "Kristina Sokova as Blonde confronting Osmin in Die Entführung aus dem Serail" },
    { img: galleryImageTwelve, aspectRatio: "3:2", alt: "Kristina Sokova in the title role of Lulu, Hochschule für Musik Weimar, 2024" },
    { img: galleryImageThirteen, aspectRatio: "3:2", alt: "Kristina Sokova as Adele presenting a roast at the table in Die Fledermaus, Landestheater Detmold" },
    { img: galleryImageFourTeen, aspectRatio: "3:2", alt: "Kristina Sokova as Galathée on her pedestal in Die schöne Galathée, Sommertheater Detmold" },
];

const thumbUrl = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=256&q=60`;
const fullUrl = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=3840&q=85`;

export default function Media() {
    const lightGallerySettings = {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        thumbnail: true,
        zoom: true,
        actualSize: false,
        autoplay: false,
        exThumbImage: 'data-thumb',
    };

    return (
        <div className="w-full mt-28 mb-28 pl-4 pr-4">
            <LightGallery
                elementClassNames="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-10 space-y-10"
                {...lightGallerySettings}
            >
                {galleryImage.map((image, index) => (
                    <a
                        href={fullUrl(image.img.src)}
                        data-thumb={thumbUrl(image.img.src)}
                        key={index}
                        className="block max-h-[1000px] max-w-[500px] h-auto w-auto overflow-hidden rounded-lg mb-10"
                        style={{ aspectRatio: image.aspectRatio }}
                    >
                        <Image
                            alt={image.alt}
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