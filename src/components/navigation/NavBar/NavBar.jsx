import { NavMenuItem } from 'components/navigation/NavMenuItem';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo} />
            </div>

            <div className={styles.right}>
                <NavMenuItem label="Projects"/>
                <NavMenuItem label="Skills"/>
                <NavMenuItem label="Contact"/>
            </div>
        </div>
    )
};
