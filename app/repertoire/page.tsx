import Image from 'next/image';

import styles from './index.module.css';
import backgroundImage from "@/public/IMG_0183.jpg";

export default function () {
    return(
        <article>
            <div className={styles.wrapper}>
                <div className={styles.section_photo}>
                    <Image
                        src={backgroundImage}
                        alt="Kristina Sokova"
                        className='object-cover min-w-[316]'
                    />
                </div>
                <div className={styles.porfolio}>
                    <div className={styles.porfolio_container}>
                        <div className={styles.header}>
                            Sung Roles
                        </div>
                        <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6'>
                            <div className={styles.text}>
                                <p>Wolfgang Amadeus Mozart</p>
                                <p>Die Entführung aus dem Serail</p>
                                <p>Blonde</p>
                            </div>
                            <div className={styles.text}>
                                <p>Franz von Suppè</p>
                                <p>Die schöne Galathée</p>
                                <p>Galathée</p>
                            </div>
                            <div className={styles.text}>
                                <p>Johann Strauss</p>
                                <p>Die Fledermaus</p>
                                <p>Adele</p>
                            </div>
                            <div className={styles.text}>
                                <p>Johann Strauss</p>
                                <p>Der Zigeunerbaron</p>
                                <p>Arsena</p>
                            </div>
                            <div className={styles.text}>
                                <p>Alban Berg</p>
                                <p>Lulu</p>
                                <p>Lulu</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.porfolio_container}>
                        <div className={styles.header}>
                            Studied Roles
                        </div>
                        <div className={styles.roles_container}>
                            <div className={styles.text}>
                                <p>Wolfgang Amadeus Mozart</p>
                                <p>Cosi fan tutte</p>
                                <p>Despina</p>
                            </div>
                            <div className={styles.text}>
                                <p>Ruggero Leoncavallo</p>
                                <p>Pagliacci</p>
                                <p>Nedda</p>
                            </div>
                            <div className={styles.text}>
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
