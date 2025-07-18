import styles from './index.module.css';

export default function ContactPage() {

    return(
        <article className={styles.current_logo}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Contacts</div>
                <div className={styles.section_container}>
                    <div className={styles.creator}>Artist</div>
                    <div className={styles.contacts}>
                        <h2>Kristina Sokova</h2>
                        <p>Email: sokova.krist@gmail.com</p>
                    </div>
                </div>
                <div className={styles.section_container}>
                    <div className={styles.creator}>Designer</div>
                    <div className={styles.contacts}>
                        <h2>Ruslan Plaksunov</h2>
                        <p>Email: plaxunov.ruslan@gmail.com</p>
                    </div>
                </div>
            </div>
        </article>
    );
}