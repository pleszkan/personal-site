import Button, { ROLES } from 'components/common/Button'

import styles from './Heading.module.scss'

export default function Heading() {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <h1>Full-stack developer</h1>
          <h2>
            I help people and brands reach their goals by designing & building
            user-centric digital products and interactive experiences
          </h2>
          <Button
            label="Contact me"
            role={ROLES.CALL_TO_ACTION}
          />
          <Button
            label="View my work"
            role={ROLES.NORMAL}
          />
        </div>
      </div>
    </div>
  )
}
