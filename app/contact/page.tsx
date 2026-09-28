import styles from './index.module.css';

export default function ContactPage() {

    return(
        <article>
            <div className={styles.wrapper}>
                <div className={styles.header}>Contacts</div>
                <div className={styles.section_container}>
                    <div className={styles.creator}>Artist</div>
                    <div className={styles.contacts}>
                        <h2>Kristina Sokova</h2>
                        <p>Email: <a href="mailto:sokova.krist@gmail.com">sokova.krist@gmail.com</a></p>
                    </div>
                </div>
                <div className={styles.section_container}>
                    <div className={styles.creator}>For Bookings</div>
                    <div className={styles.contacts}>
                        <h2>Concert & Opera Inquiries</h2>
                        <p>Email: <a href="mailto:sokova.krist@gmail.com?subject=Booking%20Inquiry">sokova.krist@gmail.com</a></p>
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