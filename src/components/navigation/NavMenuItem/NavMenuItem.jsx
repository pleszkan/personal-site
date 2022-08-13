import styles from './NavMenuItem.module.scss'

export default function NavMenuItem({ label }) {
  return <div className={styles.navMenuItem}>{label}</div>
}
