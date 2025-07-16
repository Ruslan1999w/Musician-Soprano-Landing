import Link from "next/link";
import Image from 'next/image';

import styles from './styles.module.css';
import {InstagramIcon} from "@/app/icons/InstagramIcon";
import {TelegramIcon} from "@/app/icons/TelegramIcon";
import {YouTubeIcon} from "@/app/icons/YouTube";

export const Footer = () => {

    return(
        <footer>
            <div className={`flex items-center w-full pt-28 pb-28 ${styles.email}`}>
                    <div className='flex justify-between w-full flex-wrap pl-14 pr-14 gap-8 flex-1'>
                        <div>
                            <div className={styles.title}>Newsletter Sign Up</div>
                            <h2 className='mt-3.5'>For latest news & events</h2>
                        </div>
                        <div className='flex justify-center items-center w-full md:w-1/2'>
                            <form className='relative w-full flex'>
                                <input className={`${styles.input} w-full `} type="email" placeholder='Enter email address here...'/>
                                <button className={styles.btn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.2 11.4" fill="currentColor" className='w-8 h-3'>
                                        <path
                                            d="M32.1 5.4c0-.1-.1-.2-.2-.3L27.2.3c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.6.3-.2.2-.3.4-.3.7 0 .3.1.5.3.7L29 4.8H1c-.5 0-1 .4-1 1s.4 1 1 1h28l-3.1 3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3.3 0 .5-.1.6-.3l4.7-4.7s0-.1.1-.1v-.1c.2-.3.2-.7.1-.9z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
            </div>
            <div className={`flex-col md:flex-row ${styles.contact} gap-8`}>
                <div className={styles.footer_logo}>Kristina Sokova</div>
                <nav>
                <ul className="flex justify-center items-center space-x-6">
                        <li>
                            <Link href="https://t.me/your_username" target="_blank" rel="noopener noreferrer"
                                  className="flex items-center space-x-1 hover:text-blue-500 transition">
                                <TelegramIcon/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/kristina_sokova?igsh=MWE1OTl4bzV4M2ZjbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                                  className="flex items-center space-x-1 hover:text-pink-600 transition">
                                <InstagramIcon/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://youtube.com/@kristinasokova3797?si=roZsYCsYrhHJazF4" target="_blank" rel="noopener noreferrer"
                                  className="flex items-center space-x-1 hover:text-red-600 transition">
                                <YouTubeIcon/>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={`${styles.extras} text-center md:text-right`}>
                    <div className='flex gap-2 justify-center md:justify-end'>
                        <Link href='#privacy'>Privacy </Link>
                        &
                        <Link href='#policies'> Cookie Policy</Link>
                    </div>
                    <div>
                        Designed by Ruslan Plaksunov.
                    </div>
                    <div>© Kristina Sokova 2025. All rights reserved</div>
                </div>
            </div>
        </footer>
    );
}