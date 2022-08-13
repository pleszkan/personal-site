import { NavMenuItem } from 'components/navigation/NavMenuItem'
import { Logo } from 'components/navigation/Logo'
import styles from './NavBar.module.scss'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>

        <div className={styles.right}>
          <NavMenuItem label="Projects" />
          <NavMenuItem label="Skills" />
          <NavMenuItem label="Contact" />
        </div>
      </div>
    </div>
  )
}
