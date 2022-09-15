import classNames from 'classnames'

import styles from './Button.module.scss'

export default function Button({ label, role }) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.callToAction]: role === ROLES.CALL_TO_ACTION,
      })}
    >
      {label}
    </button>
  )
}

export const ROLES = {
  CALL_TO_ACTION: 'callToAction',
  NORMAL: 'normal',
}
