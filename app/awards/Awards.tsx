import { LaurelIcon } from "@/app/icons/LaurelIcon";
import { Reveal } from "@/app/components/Reveal";

import styles from './styles.module.css';

const awards = [
    {
        year: '2024',
        prize: '1st Prize',
        name: 'International Competition "Giovani Musicisti"',
        place: 'Treviso',
    },
    {
        year: '2023',
        prize: '2nd Prize',
        name: 'International Singing Competition Lav Mirski',
        place: 'Osijek',
    },
];

export const Awards = () => {
    return (
        <section className={styles.awards}>
            <Reveal className={styles.awardsInner}>
                {awards.map((award) => (
                    <div className={styles.awardItem} key={`${award.year}-${award.place}`}>
                        <LaurelIcon width="48" height="48" className={styles.awardIcon} />
                        <div className={styles.awardYear}>{award.year}</div>
                        <div className={styles.awardText}>
                            <div className={styles.awardPrize}>{award.prize}</div>
                            <div className={styles.awardName}>{award.name}, {award.place}</div>
                        </div>
                    </div>
                ))}
            </Reveal>
        </section>
    );
};
