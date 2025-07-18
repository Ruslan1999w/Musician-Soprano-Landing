import Image from 'next/image';

import styles from './index.module.css';
import backgroundImage from "@/public/IMG_0183.jpg";

export default function () {
    const textBox = 'm-4 whitespace-nowrap flex flex-col m-4 gap-4';

    return(
        <article className={styles.current_logo}>
            <div className={styles.wrapper}>
                <div className={`${styles.section_photo} md:block hidden `}>
                    <Image
                        src={backgroundImage}
                        alt="Kristina Sokova"
                        className='object-cover min-w-[316]'
                    />
                </div>
                <div className='md:w-1/2 w-full flex justify-center flex-col mr-12 ml-12'>
                    <div className='mb-20'>
                        <div className='text-5xl flex justify-center mb-20'>
                            Sung Roles
                        </div>
                        <div className={`grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 custom-paragraphs`}>
                            <div className={textBox}>
                                <p>Wolfgang Amadeus Mozart</p>
                                <p>Die Entführung aus dem Serail</p>
                                <p>Blonde</p>
                            </div>
                            <div className={textBox}>
                                <p>Franz von Suppè</p>
                                <p>Die schöne Galathée</p>
                                <p>Galathée</p>
                            </div>
                            <div className={textBox}>
                                <p>Johann Strauss</p>
                                <p>Die Fledermaus</p>
                                <p>Adele</p>
                            </div>
                            <div className={textBox}>
                                <p>Johann Strauss</p>
                                <p>Der Zigeunerbaron</p>
                                <p>Arsena</p>
                            </div>
                            <div className={textBox}>
                                <p>Alban Berg</p>
                                <p>Lulu</p>
                                <p>Lulu</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='text-5xl flex justify-center mb-20 text-nowrap'>
                            Studied Roles
                        </div>
                        <div className={`grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 custom-paragraphs`}>
                            <div className={textBox}>
                                <p>Wolfgang Amadeus Mozart</p>
                                <p>Cosi fan tutte</p>
                                <p>Despina</p>
                            </div>
                            <div className={textBox}>
                                <p>Ruggero Leoncavallo</p>
                                <p>Pagliacci</p>
                                <p>Nedda</p>
                            </div>
                            <div className={textBox}>
                                <p>Benjamin Britten</p>
                                <p>The Turn of  the Screw</p>
                                <p>Miles</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}
