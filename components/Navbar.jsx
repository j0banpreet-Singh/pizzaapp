import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/mobile.png" alt="" width="42" height="42" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>+1 (437)-240-4086</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/phut.png" alt="" width="72" height="67"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            <div className={`${styles.item} ${styles.heading}`}>
              Pizza Hut
            </div>

            <div className={styles.item}>
                <div className={styles.cart}>
                <Image src="/img/cart2.png" alt="" width="40" height="40" />
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar