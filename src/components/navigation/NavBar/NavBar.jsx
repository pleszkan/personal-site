import { NavMenuItem } from 'components/navigation/NavMenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { Logo } from 'components/navigation/Logo'
import styles from './NavBar.module.scss'
import ThemeToggle from 'components/navigation/ThemeToggle/ThemeToggle'

export default function NavBar({ menuIsOpen, openMenu }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <Logo />
        </div>

        <div className={styles.right}>
          {/* <NavMenuItem label="Projects" /> */}
          {/* <NavMenuItem label="Skills" /> */}
          {/* <NavMenuItem label="Contact" /> */}
          {/* <ThemeToggle /> */}
          <div
            className={styles.hamburger}
            onClick={openMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  )
}
