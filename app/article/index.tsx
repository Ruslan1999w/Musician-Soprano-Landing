import Image from 'next/image';

import styles from './styles.module.css';
import backgroundImage from "@/public/photo_2025-06-16_16-42-15.jpg";
import {LatestVideo} from "@/app/latestVideo/LatestVideo";

export const Article = () => {
  return(
      <>
          <section className={`${styles.current_logo}`}>
              <div className='flex relative flex-col w-full md:flex-row text-white mt-[150px] mb-[150px] gap-[60px]' id={'article'}>
                  <div>
                      <Image
                          src={backgroundImage}
                          alt="Kristina Sokova"
                          className='w-full h-auto object-cover max-h-[968px]'
                      />
                  </div>
                  <div className={` ${styles.article_text}
                  max-w-[45rem] md:w-1/2 p-4
                  md:font-normal md:text-base w-screen
                  md:p-0
                  `}
                  >

                      <h5>
                          Kristina Sokova is a Russian soprano currently based in Germany.
                      </h5>
                      <p>
                          After moving from her hometown of Pensa in 2019, she began her vocal studies at the Hochschule für
                          Musik Detmold, where she is currently studying under Prof. Caroline Thomas.
                      </p>

                      <p>
                          Her operatic debut took place in 2024 in the title role of <i>Lulu</i> by Alban Berg at the
                          Hochschule für Musik Weimar, conducted by Noah Damm.
                          She also appeared as Adele in Johann Strauss’s <i>Die Fledermaus</i> at the Landestheater Detmold,
                          under the baton of Prof. Fabio Vettraino.
                          In addition, she performed the role of Blonde in Mozart’s <i>Die Entführung aus dem
                          Serail</i> with the OWL Kammerphilharmonie Minden, conducted by Naoko Grünberg-Sakai.
                      </p>

                      <p>
                          On May 18, 2025, she made her debut as Arsene in Johann Strauss’s <i>Der Zigeunerbaron</i> at the
                          Düsseldorf Tonhalle under the baton of conductor György Mészáros.
                      </p>
                      <div className={styles.contest}>
                      <p>
                          05/24 – International Competition “Giovani Musicisti” in Treviso, 1st Prize
                      </p>
                      <p>
                          05/23 – International Singing Competition Lav Mirski in Osijek, 2nd Prize
                      </p>
                      </div>
                  </div>
              </div>
          </section>
          <LatestVideo />
      </>
  );
};